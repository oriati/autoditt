import * as constants from './constants';

export function login(payload) {
  return {
    type: constants.LOGIN,
    payload
  }
}

export function loginSuccess(payload) {
  return {
    type: constants.LOGIN_SUCCESS,
    payload
  }
}
export function loginFail() {
  return {
    type: constants.LOGIN_FAIL
  }
}
export function logout() {
  return {
    type: constants.LOGOUT,
    
  }
}
export function logoutSuccess() {
  return {
    type: constants.LOGOUT_SUCCESS,
    
  }
}
export function logoutFail() {
  return {
    type: constants.LOGOUT_FAIL,
    
  }
}
export function getPostList() {
  return {
    type: constants.GET_POST_LIST
  }
}
export function getPostListSuccess(payload) {
  return {
    type: constants.GET_POST_LIST_SUCCESS,
    payload
  }
}
export function getPostListFail() {
  return {
    type: constants.GET_POST_LIST_FAIL
  }
}
export function upvote(payload) {
  return {
    type: constants.UPVOTE,
    payload
  }
}
export function upvoteSuccess(payload) {
  return {
    type: constants.UPVOTE_SUCCESS,
    payload
  }
}
export function upvoteFail(error) {
  return {
    type: constants.UPVOTE_FAIL,
    error
  }
}
export function downvote(payload) {
  return {
    type: constants.DOWNVOTE,
    payload
  }
}
export function downvoteSuccess(payload) {
  return {
    type: constants.DOWNVOTE_SUCCESS,
    payload
  }
}
export function downvoteFail(error) {
  return {
    type: constants.DOWNVOTE_FAIL,
    error
  }
}
export function submitPost(payload) {
  return {
    type: constants.SUBMIT_POST,
    payload
  }
}
export function submitPostSuccess(payload) {
  return {
    type: constants.SUBMIT_POST_SUCCESS,
    payload
  }
}
export function submitPostFail(error) {
  return {
    type: constants.SUBMIT_POST_FAIL,
    error
  }
}

