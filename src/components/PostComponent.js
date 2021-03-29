import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllRequests } from "../redux/post/postActions";
import { Alert, Spinner } from "reactstrap";
import Post from "./Post";

const Posts = ({ fetchAllRequests, posts, loading, error }) => {
  useEffect(() => {
    fetchAllRequests();
  }, [fetchAllRequests]);
  console.log('---------------->',posts)
  const noPostsMessage = "There are no posts to be fetched";

  const renderPosts =
    posts.length === 0 ? (
      <Alert color="primary">{noPostsMessage}</Alert>
    ) : (
      posts.map((post) => {
        return (
          <Post key={post._id}
          id={post._id}
          author={post.author}
          content={post.content}
          createdAt={post.createdAt}
          updatedAt={post.updatedAt}/>
        );
      })
    );

  return (
    <div>
    {loading ? (
      <Spinner color="primary" />
    ) : error ? (
      <Alert color="danger">{error}</Alert>
    ) : (
      <div>{renderPosts}</div>
    )}
  </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    posts: state.posts,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllRequests: () => dispatch(fetchAllRequests()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);