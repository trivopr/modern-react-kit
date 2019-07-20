/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const SelectedPosts = props => {
  const { postList } = props;
  const renderPostList = postList.map(item => {
    return (
      <div className="list-group-item list-group-item-action list-group-single-post" key={item.id}>
        {item.title}
      </div>
    );
  });
  return renderPostList;
};

SelectedPosts.propTypes = {
  postList: PropTypes.array,
};

SelectedPosts.defaultProps = {
  postList: [],
};

export default SelectedPosts;
