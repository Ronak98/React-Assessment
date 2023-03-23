import { EVENT } from "../action-types";

const initialEventSavingState = false;

const EventSavingReducer = (state = initialEventSavingState, action = {}) => {
  switch (action.type) {
    case EVENT.SAVE:
      return true;
    case EVENT.SAVE_SUCCEEDED:
      return false;
    case EVENT.SAVE_FAILED:
      return false;
    default:
      return state;
  }
};

export default EventSavingReducer;
