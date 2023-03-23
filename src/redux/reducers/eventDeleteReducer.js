import { EVENT } from "../action-types";

const initialEventDeleteState = false;

const EventDeleteReducer = (state = initialEventDeleteState, action = {}) => {
  switch (action.type) {
    case EVENT.DELETE:
      return true;
    case EVENT.DELETE_SUCCEEDED:
      return false;
    case EVENT.DELETE_FAILED:
      return false;
    default:
      return state;
  }
};

export default EventDeleteReducer;
