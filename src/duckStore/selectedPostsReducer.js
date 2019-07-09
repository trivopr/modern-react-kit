const initialstate = {
  selectedPostsId: [],
};

const SelectedPosts = (state = initialstate, action) => {
  switch (action.type) {
    case 'FETCH_ALL_SELECTED_POSTS':
      return { ...state, selectedPostsId: action.payload };

    case 'ADD_SELECTED_POST':
      return { ...state };

    case 'DELETE_SELECTED_POST':
      return { ...state };

    default:
      return state;
  }
};

export default SelectedPosts;
