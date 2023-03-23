import { call, put, take } from "redux-saga/effects";
import deleteAPI from "../../api/deleteAPI";
import { EVENT } from "../action-types";
import {
  deleteEventSucceeded,
  deleteEventFailed,
} from "../actions/eventActions";

function* processDeleteEvent(params) {
  const { fetchParams, onSuccess, onFailure } = params;

  try {
    const response = yield call(deleteAPI, `/events/${fetchParams.id}`);

    if (response.status >= 200 || response.status < 300) {
      yield put(deleteEventSucceeded());
      yield call(onSuccess, response.statusText);
    } else {
      yield put(deleteEventFailed());
      yield call(onFailure, response.statusText);
    }
  } catch (error) {
    yield put(deleteEventFailed());
    yield call(onFailure, error);
  }
}

export default function* watchDeleteEvent() {
  while (true) {
    const { params } = yield take(EVENT.DELETE);
    yield call(processDeleteEvent, params);
  }
}
