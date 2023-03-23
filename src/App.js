import React, { Suspense, useEffect, useState } from "react";
import { Spin } from "antd";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSucceeded } from "./redux/actions";
import "./App.css";

const LazyAppRouterComponent = React.lazy(() => import("./utils/AppRouter"));
const LazyAppAuthRouterComponent = React.lazy(() =>
  import("./utils/AuthAppRouter")
);

function App() {
  const { isLoggedIn } = useSelector(({ Login }) => ({
    isLoggedIn: Login,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser) {
      dispatch(loginSucceeded());
    }
  }, []);

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
