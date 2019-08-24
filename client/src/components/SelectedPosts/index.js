/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isEmpty, values } from 'lodash';
import SelectedPostsSelector from '../../selectors/selected_posts';

const SelectedPosts = props => {
  const { selectedPostsList } = props;

  // const arrSelectedPostInfo = Object.values(props.postLists).filter(item => selectedPostsList.includes(item.id));
  const renderPostList = selectedPostsList.map(item => (
    <div className="list-group-item list-group-item-action list-group-single-post" key={item.id}>
      {item.title}
    </div>
  ));

  return renderPostList;
};

SelectedPosts.propTypes = {
  postList: PropTypes.array,
};

SelectedPosts.defaultProps = {
  postList: [],
};

const mapStateToProps = state => {
  return {
    selectedPostsList: SelectedPostsSelector(state),
    postLists: state.Posts,
  };
};

export default connect(mapStateToProps)(SelectedPosts);
