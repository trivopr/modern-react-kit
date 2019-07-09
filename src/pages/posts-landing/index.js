import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { getPosts } from '../../duckStore/postReducer';
import SinglePost from '../../components/SinglePost';

const PostLanding = props => {
  const [postsList, setPosts] = useState([]);

  const handleSetPosts = () => {
    const newPost = props.getPosts();
    setPosts(newPost);
  };

  useEffect(() => {
    handleSetPosts();
  }, []);

  const renderPosts = () => {
    const { posts } = props;
    const data = posts.map(item => <SinglePost post={item} key={item.id} />);
    return <div className="list-group">{data}</div>;
  };

  return (
    <div className="container-fluid">
      <h2>
        Add More <FontAwesomeIcon icon={faPlus} />
      </h2>
      {!isEmpty(props.posts) && renderPosts()}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.Posts.postsList,
  };
};

export default connect(
  mapStateToProps,
  { getPosts }
)(PostLanding);
