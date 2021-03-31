import React from "react";
import { Card, CardHeader, CardBody, CardText, Button } from "reactstrap";
import { connect } from "react-redux";
import { deletePost, getPostDate } from "../redux/post/postActions";
import { Redirect } from "react-router-dom";

const Post = ({
  id,
  author,
  content,
  updatedAt,
  createdAt,
  deletePost,
  getPostDate,
  post,
}) => {
  const isUpdateElement = post ? (
    <Redirect to="/update" />
  ) : (
    <div className="mb-4">
      <Card>
        <CardHeader>{`${author} - ${new Date(
          createdAt
        ).toDateString()}`}</CardHeader>
        <CardBody>
          <CardText>{content}</CardText>
          <CardText>
            Last updated at - {new Date(updatedAt).toLocaleString()}
          </CardText>
          <Button
            className="mr-2"
            color="primary"
            onClick={() => getPostDate(id)}
          >
            Edit
          </Button>
          <Button
            className="mr-2"
            color="danger"
            onClick={() => deletePost(id)}
          >
            Delete
          </Button>
        </CardBody>
      </Card>
    </div>
  );

  return isUpdateElement;
};

const mapStateToProps = (state) => {
  return {
    post: state.post,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id)),
    getPostDate: (id) => dispatch(getPostDate(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);