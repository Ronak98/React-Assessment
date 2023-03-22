import { call, put, take } from "redux-saga/effects";
import loadAPI from "../../api/loadAPI";
import { LOGIN } from "../action-types";
import { loginSucceeded, loginFailed } from "../actions/loginActions";

function* processLogin(params) {
  const { fetchParams, onSuccess, onFailure } = params;

  try {
    const response = yield call(loadAPI, "/users");

    if (response.status === 200) {
      const data = response.data;
      let checkUser =
        data.length > 0 &&
        data.find(
          (item) =>
            item.email === fetchParams.email &&
            item.password === fetchParams.password
        );
      if (checkUser) {
        yield put(loginSucceeded());
        yield call(onSuccess, checkUser);
      } else {
        yield put(loginFailed());
        yield call(onFailure, response.statusText);
      }
    } else {
      yield put(loginFailed());
      yield call(onFailure, response.statusText);
    }
  } catch (error) {
    yield put(loginFailed());
    yield call(onFailure, error);
  }
}

export default function* watchLogin() {
  while (true) {
    const { params } = yield take(LOGIN.LOGIN);
    yield call(processLogin, params);
  }
}
