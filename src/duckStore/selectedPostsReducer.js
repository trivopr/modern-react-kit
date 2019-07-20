const FETCH_ALL_SELECTED_POSTS = 'FETCH_ALL_SELECTED_POSTS';
const ADD_SELECTED_POST = 'ADD_SELECTED_POST';
const DELETE_SELECTED_POST = 'DELETE_SELECTED_POST';

const initialstate = [];
const SelectedPosts = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_ALL_SELECTED_POSTS:
      return state;

    case ADD_SELECTED_POST:
      return [...state, action.payload];

    case DELETE_SELECTED_POST:
      return [...state];

    default:
      return state;
  }
};

export const addSelectedPost = payload => {
  return {
    type: ADD_SELECTED_POST,
    payload,
  };
};

export default SelectedPosts;
