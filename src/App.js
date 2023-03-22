import React, { Suspense } from "react";
import { Spin } from "antd";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";

const LazyAppRouterComponent = React.lazy(() => import("./utils/AppRouter"));
const LazyAppAuthRouterComponent = React.lazy(() =>
  import("./utils/AuthAppRouter")
);

function App() {
  const { isLoggedIn } = useSelector(({ Login }) => ({
    isLoggedIn: Login,
  }));

  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="common__wrapper">
            <Spin />
          </div>
        }
      >
        {isLoggedIn ? (
          <LazyAppAuthRouterComponent />
        ) : (
          <LazyAppRouterComponent />
        )}
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
