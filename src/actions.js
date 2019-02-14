import * as constants from './constants';

export function login() {
  return {
    type: constants.LOGIN
  }
}
export function loginSuccess() {
  return {
    type: constants.LOGIN_SUCCESS,
  }
}
export function loginFail() {
  return {
    type: constants.LOGIN_FAIL
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
