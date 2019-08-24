const FETCH_ALL_SELECTED_POSTS = 'FETCH_ALL_SELECTED_POSTS';
const UPDATE_SELECTED_POST = 'UPDATE_SELECTED_POST';

const initialstate = [];

const transformUpdateSelect = (state, action) => {
  const isExisted = state.includes(action.payload);

  if (isExisted) {
    return state.filter(item => item !== action.payload);
  }

  return [...state, action.payload];
};

const SelectedPosts = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_ALL_SELECTED_POSTS:
      return state;

    case UPDATE_SELECTED_POST:
      return transformUpdateSelect(state, action);

    default:
      return state;
  }
};

export const handleUpdateSelectedPost = payload => {
  return {
    type: UPDATE_SELECTED_POST,
    payload,
  };
};

export default SelectedPosts;
