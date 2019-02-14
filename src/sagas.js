import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import * as constants from './constants';

function* login() {
  console.log('login in saga');
  try {
    const response = yield axios({
      method: "get",
      url: "https://dog.ceo/api/breeds/image/random"
    });
    const data = response.data.message;

    yield put({ type: constants.LOGIN_SUCCESS, data }); 
  } catch (error) {
    yield put({ type: constants.LOGIN_FAIL, error });
  }
}
function* getPosts() {
  console.log('get posts in saga');
  try {
    const response = yield axios({
      method: "get",
      url: "https://dog.ceo/api/breeds/image/random"
    });
    const data = response.data.message;
    yield put({ type: constants.GET_POST_LIST_SUCCESS, data });
  } catch (error) {
    yield put({ type: constants.GET_POST_LIST_FAIL, error });
  }
}

export function* watcherSaga() {
  yield takeLatest(constants.GET_POST_LIST, getPosts);
  yield takeLatest(constants.LOGIN, login);
}
