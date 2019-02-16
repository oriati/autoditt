import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import {
  LOGIN,
  LOGOUT,
  GET_POST_LIST,
  CREATE_NEW_POST,
  UPVOTE,
  DOWNVOTE,
  SUBMIT_COMMENT
} from './constants';
import * as actions from './actions';
import { posts as postsMock } from './mocks/postsMock';

function* login(action) {
  console.log('login in saga : ', action);
  const { userName } = action.payload
  try {
    yield localStorage.setItem('userName', userName)
    yield put(actions.loginSuccess({userName}));
  } catch (error) {
    yield put(actions.loginFail(error));
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

function* submitComment(action) {
  console.log('SUBMIT_COMMENT in saga', action);
  try {
    const data = yield new Promise((res) => {
      res(action.payload)
    })
    yield put(actions.submitCommentSuccess(data));
  } catch (error) {
    yield put(actions.submitCommentFail(error));
  }
}



export function* watcherSaga() {
  yield takeLatest(LOGIN, login);
  yield takeLatest(LOGOUT, logout);
  yield takeLatest(GET_POST_LIST, getPostList);
  yield takeLatest(CREATE_NEW_POST, createNewPost);
  yield takeLatest(UPVOTE, upvote);
  yield takeLatest(DOWNVOTE, downvote);
  yield takeLatest(SUBMIT_COMMENT, submitComment);

}
