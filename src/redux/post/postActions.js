import {
    FETCH_ALL_POSTS_FAILURE,
    FETCH_ALL_POSTS_SUCCESS,
    FETCH_ALL_POSTS_REQUEST,
    DELETE_POST_REQUEST,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAILURE,
    GET_POST_DATA_REQUEST,
    GET_POST_DATA_SUCCESS,
    GET_POST_DATA_FAILURE,
    UPDATE_POST_REQUEST,
    UPDATE_POST_SUCCESS,
    UPDATE_POST_FAILURE,
    CANCEL_UPDATE,
    CREATE_POST_REQUEST,
    CREATE_POST_SUCCESS,
    CREATE_POST_FAILURE,
  } from "./postTypes";
  import myAxios from "../../myAxios";
  
  export const fetchAllPosts = () => (dispatch) => {
    dispatch({ type: FETCH_ALL_POSTS_REQUEST });
    myAxios
      .get("/")
      .then((response) => {
        const posts = response.data.response;
        dispatch({ type: FETCH_ALL_POSTS_SUCCESS, payload: posts });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_ALL_POSTS_FAILURE,
          payload: "Something went wrong while fetching all the posts",
        });
      });
  };
  
  export const deletePost = (id) => (dispatch) => {
    dispatch({ type: DELETE_POST_REQUEST });
    myAxios
      .delete("/delete/" + id)
      .then((response) => {
        dispatch({ type: DELETE_POST_SUCCESS, payload: id });
      })
      .catch((err) => {
        dispatch({
          type: DELETE_POST_FAILURE,
          payload: "Something went wrong while deleting a post",
        });
      });
  };
  
  export const getPostDate = (id) => (dispatch) => {
    dispatch({ type: GET_POST_DATA_REQUEST });
    myAxios
      .get("/" + id)
      .then((response) => {
        const post = {
          id: response.data.response._id,
          author: response.data.response.author,
          content: response.data.response.content,
        };
        dispatch({ type: GET_POST_DATA_SUCCESS, payload: post });
      })
      .catch((err) => {
        dispatch({
          type: GET_POST_DATA_FAILURE,
          payload: "Something went wrong while getting the data of a post",
        });
      });
  };
  
  export const updatePost = (id, author, content) => (dispatch) => {
    dispatch({ type: UPDATE_POST_REQUEST });
    myAxios
      .post("/update/" + id, { author, content })
      .then((response) => {
        dispatch({ type: UPDATE_POST_SUCCESS });
      })
      .catch((err) => {
        dispatch({
          type: UPDATE_POST_FAILURE,
          payload: "Something went wrong while updating a post",
        });
      });
  };
  
  export const cancelUpdate = () => {
    return { type: CANCEL_UPDATE };
  };
  
  export const createPost = (author, content) => (dispatch) => {
    dispatch({ type: CREATE_POST_REQUEST });
    console.log(author, content);
    myAxios
      .post("/add", { author, content })
      .then((response) => {
        dispatch({ type: CREATE_POST_SUCCESS });
      })
      .catch((err) => {
        dispatch({
          type: CREATE_POST_FAILURE,
          payload: "Something went wrong while creating a post",
        });
      });
  };