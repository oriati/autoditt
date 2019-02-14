import { LOGIN_SUCCESS, LOGIN_FAIL, GET_POST_LIST_SUCCESS, GET_POST_LIST_FAIL } from './constants';


// reducer with initial state
const initialState = {
  fetching: false,
  postList: [],
  userName: '',
  newPost: null,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log('login attempt SUCCESS');
      return state;
    case LOGIN_FAIL:
      console.log('login attempt FAIL');
      return state;
    case GET_POST_LIST_SUCCESS:
      console.log('get posts SUCCESS', action);
      return {
        ...state,
        postList: action.payload
      }
    case GET_POST_LIST_FAIL:
      console.log('get posts FAIL');
      return state;

    // case API_CALL_REQUEST:
    //   return { ...state, fetching: true, error: null };
    // case API_CALL_SUCCESS:
    //   return { ...state, fetching: false, dog: action.dog };
    // case API_CALL_FAILURE:
    //   return { ...state, fetching: false, dog: null, error: action.error };
    default:
      return state;
  }
}