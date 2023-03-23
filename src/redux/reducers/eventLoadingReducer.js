import { EVENT } from "../action-types";

const initialEventLoadingState = false;

const EventLoadingReducer = (state = initialEventLoadingState, action = {}) => {
  switch (action.type) {
    case EVENT.LOAD:
      return true;
    case EVENT.LOAD_SUCCEEDED:
      return false;
    case EVENT.LOAD_FAILED:
      return false;
    default:
      return state;
  }
};

export default EventLoadingReducer;
