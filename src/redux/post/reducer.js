const {
  FETCH_ALL_POSTS_REQUEST,
  FETCH_ALL_POSTS_SUCCESS,
  FETCH_ALL_POSTS_FAILURE,
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
} = require("./postTypes");

const initialState = {
  loading: false,
  posts: [],
  post: null,
  error: "",
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST_REQUEST:
    case UPDATE_POST_REQUEST:
    case GET_POST_DATA_REQUEST:
    case DELETE_POST_REQUEST:
    case FETCH_ALL_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALL_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case DELETE_POST_SUCCESS:
      const postsAfterDelete = state.posts.filter(
        (post) => post._id !== action.payload
      );
      return {
        ...state,
        loading: false,
        posts: postsAfterDelete,
      };
    case GET_POST_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.payload,
      };
    case CANCEL_UPDATE:
    case UPDATE_POST_SUCCESS:
    case UPDATE_POST_FAILURE:
      return {
        ...state,
        loading: false,
        post: null,
      };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CREATE_POST_FAILURE:
    case GET_POST_DATA_FAILURE:
    case DELETE_POST_FAILURE:
    case FETCH_ALL_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;