import { call, put, take } from "redux-saga/effects";
import loadAPI from "../../api/loadAPI";
import saveAPI from "../../api/saveAPI";
import { REGISTER } from "../action-types";
import { registerSucceeded, registerFailed } from "../actions/registerActions";

function* processRegister(params) {
  const { data, onSuccess, onFailure } = params;

  try {
    const usersList = yield call(loadAPI, "/users");
    let isUserExist =
      usersList.data.length > 0 &&
      usersList.data.find((item) => item.email === data.email);

    if (!isUserExist) {
      const response = yield call(saveAPI, "/users", data);
      if (response.status >= 200 || response.status < 300) {
        yield put(registerSucceeded());
        yield call(onSuccess, response.statusText);
      } else {
        yield put(registerFailed());
        yield call(onFailure, response.statusText);
      }
    } else {
      yield put(registerFailed());
      yield call(onFailure, usersList.statusText);
    }
  } catch (error) {
    yield put(registerFailed());
    yield call(onFailure, error);
  }
}

export default function* watchRegister() {
  while (true) {
    const { params } = yield take(REGISTER.REGISTER);
    yield call(processRegister, params);
  }
}
