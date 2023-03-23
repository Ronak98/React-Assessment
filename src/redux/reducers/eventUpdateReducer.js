import { EVENT } from "../action-types";

const initialEventUpdateState = false;

const EventUpdatingReducer = (state = initialEventUpdateState, action = {}) => {
  switch (action.type) {
    case EVENT.UPDATE:
      return true;
    case EVENT.UPDATE_SUCCEEDED:
      return false;
    case EVENT.UPDATE_FAILED:
      return false;
    default:
      return state;
  }
};

export default EventUpdatingReducer;
