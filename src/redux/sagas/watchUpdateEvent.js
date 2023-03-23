import { call, put, take } from "redux-saga/effects";
import updateAPI from "../../api/updateAPI";
import { EVENT } from "../action-types";
import {
  updateEventSucceeded,
  updateEventFailed,
} from "../actions/eventActions";

function* processUpdateEvent(params) {
  const { data, onSuccess, onFailure } = params;

  try {
    const response = yield call(updateAPI, `/events/${data.id}`, data);

    if (response.status >= 200 || response.status < 300) {
      yield put(updateEventSucceeded());
      yield call(onSuccess, response.statusText);
    } else {
      yield put(updateEventFailed());
      yield call(onFailure, response.statusText);
    }
  } catch (error) {
    yield put(updateEventFailed());
    yield call(onFailure, error);
  }
}

export default function* watchUpdateEvent() {
  while (true) {
    const { params } = yield take(EVENT.UPDATE);
    yield call(processUpdateEvent, params);
  }
}
