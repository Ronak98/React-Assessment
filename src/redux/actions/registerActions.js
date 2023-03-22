import { REGISTER } from "../action-types";

export const register = (params) => ({
  type: REGISTER.REGISTER,
  params,
});

export const registerSucceeded = (params) => ({
  type: REGISTER.REGISTER_SUCCEEDED,
});

export const registerFailed = (params) => ({
  type: REGISTER.REGISTER_FAILED,
});
