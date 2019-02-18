import uniqId from 'uniqid';

import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GET_POST_LIST_SUCCESS,
  GET_POST_LIST_FAIL,
  UPVOTE_SUCCESS,
  UPVOTE_FAIL,
  DOWNVOTE_SUCCESS,
  DOWNVOTE_FAIL,
  SUBMIT_POST_SUCCESS,
  SUBMIT_POST_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,

} from './constants';

const initialState = {
  fetching: false,
  postList: [],
  userName: '',
  newPost: null,
};

export function reducer(state = initialState, action) {
  switch (action.type) {

    case LOGIN_SUCCESS:
      // console.log('login attempt SUCCESS');
      return {
        ...state,
        userName: action.payload.userName
      };

    case LOGIN_FAIL:
      // console.log('login attempt FAIL');
      return state;

    case LOGOUT_SUCCESS:
      // console.log('LOGOUT attempt SUCCESS');
      return { ...state, userName: '' };

    case LOGOUT_FAIL:
      // console.log('logout attempt FAILED(????)');
      return state;

    case GET_POST_LIST_SUCCESS:
      // console.log('get posts SUCCESS', action);
      return {
        ...state,
        postList: action.payload
      }

    case GET_POST_LIST_FAIL:
      // console.log('get posts FAIL');
      return state;

    case UPVOTE_SUCCESS: {
      // console.log('UPVOTE SUCCESS IN REDUCER', action);
      const { postId } = action.payload;
      const idx = state.postList.findIndex((post) => post.id === postId);
      const updatedPost = {
        ...state.postList[idx],
        score: state.postList[idx].score + 1,
        userScore: state.postList[idx].userScore + 1
      }

      return {
        ...state,
        postList: [
          ...state.postList.slice(0, idx),
          updatedPost,
          ...state.postList.slice(idx + 1)
        ]
      }
    }

    case UPVOTE_FAIL:
      // console.log('UPVOTE FAIL IN REDUCER');
      return state;

    case DOWNVOTE_SUCCESS: {
      const { postId } = action.payload;
      const idx = state.postList.findIndex((post) => post.id === postId);
      const updatedPost = {
        ...state.postList[idx],
        score: state.postList[idx].score - 1,
        userScore: state.postList[idx].userScore - 1
      }
      return {
        ...state,
        postList: [
          ...state.postList.slice(0, idx),
          updatedPost,
          ...state.postList.slice(idx + 1)
        ]

      }
    }

    case DOWNVOTE_FAIL:
      // console.log('DOWNVOTE FAIL IN REDUCER');
      return state;

    case SUBMIT_POST_SUCCESS: {
      const { postId, text, title, imageUrl } = action.payload;
      const newPost = {
        id: uniqId(),
        text,
        title,
        imageUrl,
        userName: state.userName,
        dateSubmitted: new Date().toDateString(),
        score: 1,
        parentId: postId,
        userScore: 1
      }
      return {
        ...state,
        postList: [...state.postList, newPost]

      };
    }

    case SUBMIT_POST_FAIL:
      // console.log('SUBMIT POST FAIL IN REDUCER');
      return state;

    default:
      return state;
  }
}

// const findPath = (pathStr, postList) => { 
//   // this function gets an array of ids and return array of indexes
//   const pathArray = pathStr.split('_');
//   const res = [];

//   function findIndexes(pathArr, list) {
//     if (!pathArr[0]) return;
//     const idx = list.findIndex((post) => post.id == pathArr[0]);
//     if (!idx && (idx !== 0)) throw new Error('couldnt find the index');
//     pathArr.length === 1? res.push(`[${idx}]`): res.push(`[${idx}][comments]`)
//     if (list[idx].comments[0]) {
//       findIndexes(pathArr.slice(1), list[idx].comments)
//     }
//   }
//   findIndexes(pathArray, postList)
//   return res.join('');
// }
