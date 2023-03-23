import { combineReducers } from "redux";
import EventLoadingReducer from "./eventLoadingReducer";
import EventSavingReducer from "./eventSavingReducer";
import EventUpdatingReducer from "./eventUpdateReducer";
import LoginReducer from "./loginReducer";
import RegisterReducer from "./registerReducer";

const rootReducer = combineReducers({
  Login: LoginReducer,
  Register: RegisterReducer,
  SaveEvent: EventSavingReducer,
  LoadEvent: EventLoadingReducer,
  UpdateEvent: EventUpdatingReducer,
});

export default rootReducer;
