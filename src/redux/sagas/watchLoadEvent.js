import { call, put, take } from "redux-saga/effects";
import loadAPI from "../../api/loadAPI";
import { EVENT } from "../action-types";
import { loadEventSucceeded, loadEventFailed } from "../actions/eventActions";

function* processLoadEvent(params) {
  const { fetchParams, onSuccess, onFailure } = params;

  try {
    const response = yield call(loadAPI, `/events?userId=${fetchParams.id}`);

    if (response.status >= 200 || response.status < 300) {
      yield put(loadEventSucceeded());
      yield call(onSuccess, response.data);
    } else {
      yield put(loadEventFailed());
      yield call(onFailure, response.statusText);
    }
  } catch (error) {
    yield put(loadEventFailed());
    yield call(onFailure, error);
  }
}

export default function* watchLoadEvent() {
  while (true) {
    const { params } = yield take(EVENT.LOAD);
    yield call(processLoadEvent, params);
  }
}
