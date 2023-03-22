import { LOGIN } from "../action-types";

const initialLoginState = false;

const LoginReducer = (state = initialLoginState, action = {}) => {
  switch (action.type) {
    case LOGIN.LOGIN:
      return false;
    case LOGIN.LOGIN_SUCCEEDED:
      return true;
    case LOGIN.LOGIN_FAILED:
      return false;
    default:
      return state;
  }
};

export default LoginReducer;
