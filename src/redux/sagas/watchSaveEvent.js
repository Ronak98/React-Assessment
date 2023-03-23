import { call, put, take } from "redux-saga/effects";
import saveAPI from "../../api/saveAPI";
import { EVENT } from "../action-types";
import { saveEventSucceeded, saveEventFailed } from "../actions/eventActions";

function* processSaveEvent(params) {
  const { data, onSuccess, onFailure } = params;

  try {
    const response = yield call(saveAPI, "/events", data);

    if (response.status >= 200 || response.status < 300) {
      yield put(saveEventSucceeded());
      yield call(onSuccess, response.statusText);
    } else {
      yield put(saveEventFailed());
      yield call(onFailure, response.statusText);
    }
  } catch (error) {
    yield put(saveEventFailed());
    yield call(onFailure, error);
  }
}

export default function* watchSaveEvent() {
  while (true) {
    const { params } = yield take(EVENT.SAVE);
    yield call(processSaveEvent, params);
  }
}
