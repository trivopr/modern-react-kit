import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getPosts } from "../../duckStore/postReducer";

const PostLanding = props => {
  const [posts, setPosts] = useState([]);

  const handleSetPosts = () => {
    // setPosts(data);
    props.getPosts();
    console.log(props.posts);
  };

  useEffect(() => {
    handleSetPosts();
  }, []);

  return (
    <div className="container-fluid">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste fugit voluptate voluptatum,
      iusto similique maiores deleniti error asperiores aliquid, minima quo exercitationem eligendi
      hic. Aspernatur deserunt earum quidem tempore modi!
    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(
  mapStateToProps,
  { getPosts }
)(PostLanding);
