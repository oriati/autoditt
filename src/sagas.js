import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import {
  LOGIN,
  LOGOUT,
  GET_POST_LIST,
  CREATE_NEW_POST,
  UPVOTE,
  DOWNVOTE,
  SUBMIT_POST
} from './constants';
import * as actions from './actions';
import { posts as postsMock } from './mocks/postsMock';

function* login(action) {
  const { userName } = action.payload
  if (userName) {
    try {
      yield localStorage.setItem('userName', userName)
      yield put(actions.loginSuccess({ userName }));
    } catch (error) {
      yield put(actions.loginFail(error));
    }
  }
}
function* logout() {
  console.log('LOGOUT in SAGA');
  try {
    yield localStorage.removeItem('userName')
    yield put(actions.logoutSuccess());
  } catch (error) {
    yield put(actions.logoutFail(error));
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

function* upvote(action) {
  console.log('UPVOTE in saga', action);
  try {
    const data = yield new Promise((res) => {
      res(action.payload)
    })
    yield put(actions.upvoteSuccess(data));
  } catch (error) {
    yield put(actions.upvoteFail(error));
  }
}

function* downvote(action) {
  console.log('DOWNVOTE in saga', action);
  try {
    const data = yield new Promise((res) => {
      res(action.payload)
    })
    yield put(actions.downvoteSuccess(data));
  } catch (error) {
    yield put(actions.downvoteFail(error));
  }
}

function* submitPost(action) {
  console.log('SUBMIT_POST in saga', action);
  try {
    const data = yield new Promise((res) => {
      res(action.payload)
    })
    yield put(actions.submitPostSuccess(data));
  } catch (error) {
    yield put(actions.submitPostFail(error));
  }
}



export function* watcherSaga() {
  yield takeLatest(LOGIN, login);
  yield takeLatest(LOGOUT, logout);
  yield takeLatest(GET_POST_LIST, getPostList);
  yield takeLatest(UPVOTE, upvote);
  yield takeLatest(DOWNVOTE, downvote);
  yield takeLatest(SUBMIT_POST, submitPost);

}
