import { LOGIN } from "../action-types";

export const login = (params) => ({
  type: LOGIN.LOGIN,
  params,
});

export const loginSucceeded = (params) => ({
  type: LOGIN.LOGIN_SUCCEEDED,
});

export const loginFailed = (params) => ({
  type: LOGIN.LOGIN_FAILED,
});

export const logout = () => ({
  type: LOGIN.LOGOUT,
});
