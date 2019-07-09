import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

const SinglePost = props => {
  const { post } = props;
  return (
    <div className="list-group-item list-group-item-action">
      {post.title} &nbsp;
      <FontAwesomeIcon icon={faTrashAlt} /> &nbsp;
      <FontAwesomeIcon icon={faEdit} /> &nbsp;
    </div>
  );
};

// SinglePost.PropTypes = {
//   post: {
//     title: '',
//   },
// };

export default SinglePost;
