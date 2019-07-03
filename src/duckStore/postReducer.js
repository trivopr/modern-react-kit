import PostApis from '../api/PostApis';

const FETCH_SINGLE_POST = 'FETCH_SINGLE_POST';
const FETCH_ALL_POST = 'FETCH_ALL_POST';
const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';
const DELETE_POST = 'DELETE_POST';
const SELECTED_POST = 'SELECTED_POST';

export const getPostsSuccess = payload => {
  return {
    type: FETCH_ALL_POST,
    payload,
  };
};

export function getPosts() {
  return dispatch => {
    PostApis.getPosts()
      .then(data => {
        dispatch(getPostsSuccess(data));
      })
      .catch(err => console.log(err));
  };
}

const initialstate = {
  postsList: [],
  selectedPostIds: [],
};

const Posts = (state = initialstate, action) => {
  switch (action.type) {
    case 'FETCH_ALL_POST':
      return { ...state, postsList: action.payload };

    case 'ADD_POST':
      return { ...state };

    default:
      return state;
  }
};

export default Posts;
