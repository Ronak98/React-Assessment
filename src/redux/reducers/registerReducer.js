import { REGISTER } from "../action-types";

const initialLoginState = false;

const RegisterReducer = (state = initialLoginState, action = {}) => {
  switch (action.type) {
    case REGISTER.REGISTER:
      return true;
    case REGISTER.REGISTER_SUCCEEDED:
      return false;
    case REGISTER.REGISTER_FAILED:
      return false;
    default:
      return state;
  }
};

export default RegisterReducer;
