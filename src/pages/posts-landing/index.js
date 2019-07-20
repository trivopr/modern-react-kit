import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isEmpty, values } from 'lodash';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { getPosts, deleteSinglePost } from '../../duckStore/postReducer';
import { addSelectedPost } from '../../duckStore/selectedPostsReducer';
import SinglePost from '../../components/SinglePost';
import SelectedPosts from '../../components/SelectedPosts';

const PostLanding = props => {
  const [postsList, setPosts] = useState([]);

  const handleSetPosts = () => {
    props.getPosts();
    setPosts(props.posts);
  };

  useEffect(() => {
    handleSetPosts();
  }, []);

  const handleSelectedPost = id => {
    props.addSelectedPost(id);
  };

  const handleEditPost = id => {
    console.log('edit id', id);
  };

  const handleDeletePost = id => {
    props.deleteSinglePost(id);
  };

  const renderPosts = () => {
    const data = values(props.posts).map(item => (
      <SinglePost
        post={item}
        key={item.id}
        handleSelectedPostClick={handleSelectedPost}
        handleEditPost={handleEditPost}
        handleDeletePost={handleDeletePost}
      />
    ));
    return <div className="list-group">{data}</div>;
  };

  return (
    <div className="container-fluid">
      <h4>Create Post</h4>
      <hr />
      <h4>Selected Post</h4>
      <SelectedPosts postList={props.selectedPosts} />
      <hr />
      {!isEmpty(props.posts) && renderPosts()}
    </div>
  );
};

// PostModel: PropTypes.shape({
//   id: PropTypes.number,
//   userId: PropTypes.number,
//   title: PropTypes.string,
//   body: PropTypes.string
// });

PostLanding.propTypes = {
  getPosts: PropTypes.func,
  addSelectedPost: PropTypes.func,
  deleteSinglePost: PropTypes.func,
  posts: PropTypes.object,
  selectedPosts: PropTypes.array,
};

PostLanding.defaultProps = {
  posts: {},
  selectedPosts: [],
  getPosts: () => {},
  addSelectedPost: () => {},
  deleteSinglePost: () => {},
};

const mapStateToProps = state => {
  return {
    posts: state.Posts,
    selectedPosts: state.selectedPosts,
  };
};

export default connect(
  mapStateToProps,
  { getPosts, addSelectedPost, deleteSinglePost }
)(PostLanding);
