import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import * as constants from './constants';
import * as actions from './actions';
import {posts as postsMock} from './mocks/postsMock';

function* login(userName) {
  console.log('login in saga');
  try {
    yield localStorage.setItem('userName:', userName)
    // const response = yield axios({
    //   method: "get",
    //   url: "https://dog.ceo/api/breeds/image/random"
    // });
    // const data = response.data.message;
    // yield put(actions.loginSuccess(data)); 
    yield put(actions.loginSuccess()); 
  } catch (error) {
    yield put(actions.loginFail(error));
  }
}
function* getPostList() {
  console.log('GET posts in saga');
  try {
    const data = yield new Promise((res) => {
      res(postsMock)
    })
    yield put(actions.getPostListSuccess(data));
  } catch (error) {
    yield put(actions.getPostListFail(error));
  }
}
function* createNewPost(postObj) {
  console.log('CREATE posts in saga');
  try {
    const response = yield axios({
      method: "get",
      url: "https://dog.ceo/api/breeds/image/random"
    });
    const data = response.data.message;
    yield put(actions.getPostListSuccess(data));
  } catch (error) {
    yield put(actions.getPostListFail(error));
  }
}

export function* watcherSaga() {
  yield takeLatest(constants.LOGIN, login);
  yield takeLatest(constants.GET_POST_LIST, getPostList);
  yield takeLatest(constants.CREATE_NEW_POST, createNewPost);
}
