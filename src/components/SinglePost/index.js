/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './single-post.scss';

const SinglePost = props => {
  const { post } = props;
  return (
    <div className="list-group-item list-group-item-action list-group-single-post">
      <span onClick={event => props.handleSelectedPostClick(post.id, event)}>{post.title}</span>
      <span className="action-button">
        <FontAwesomeIcon icon={faTrashAlt} onClick={() => props.handleDeletePost(post.id)} /> &nbsp;
        <FontAwesomeIcon icon={faEdit} onClick={() => props.handleEditPost(post.id)} /> &nbsp;
      </span>
    </div>
  );
};

SinglePost.propTypes = {
  post: PropTypes.object,
  handleSelectedPostClick: PropTypes.func,
  handleDeletePost: PropTypes.func,
  handleEditPost: PropTypes.func,
};

SinglePost.defaultProps = {
  post: {},
  handleSelectedPostClick: () => {},
  handleDeletePost: () => {},
  handleEditPost: () => {},
};

export default SinglePost;
