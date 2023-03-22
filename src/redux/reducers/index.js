import { combineReducers } from "redux";
import LoginReducer from "./loginReducer";
import RegisterReducer from "./registerReducer";

const rootReducer = combineReducers({
  Login: LoginReducer,
  Register: RegisterReducer,
});

export default rootReducer;
