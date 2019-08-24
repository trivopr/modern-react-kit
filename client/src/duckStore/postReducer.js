import { mapKeys, omit } from 'lodash';
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

export const getPosts = () => {
  return dispatch => {
    PostApis.getPosts()
      .then(data => {
        dispatch(getPostsSuccess(data));
      })
      .catch(err => console.log(err));
  };
};

const initialState = {};

const transformDataAllPosts = (state, action) => {
  const newAllPosts = mapKeys(action.payload, 'id');
  return { ...state, ...newAllPosts };
};

const handleActionDeletePost = payload => {
  return {
    type: DELETE_POST,
    payload,
  };
};

const handleActionUpdatePost = payload => {
  return {
    type: UPDATE_POST,
    payload,
  };
};

export const deleteSinglePost = id => {
  return dispatch => dispatch(handleActionDeletePost(id));
};

export const updateSinglePost = post => {
  return dispatch => dispatch(handleActionUpdatePost(post));
};

const Posts = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_POST:
      return transformDataAllPosts(state, action);

    case UPDATE_POST:
      // payload: {id: .., title: .., date};
      return { ...state, [action.payload.id]: action.payload };

    case ADD_POST:
      return { ...state };

    case DELETE_POST:
      // payload: id
      return omit(state, action.payload);

    default:
      return { ...state };
  }
};

export default Posts;
