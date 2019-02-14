import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga

// worker saga: makes the api call when watcher saga sees the action
function* getPosts() {
  try {
    const response = yield axios({
      method: "get",
      url: "https://dog.ceo/api/breeds/image/random"
    });
    const dog = response.data.message;

    // dispatch a success action to the store with the new dog
    yield put({ type: "API_CALL_SUCCESS", dog });
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}

export function* watcherSaga() {
  yield takeLatest("GET_POSTS", getPosts);
}
