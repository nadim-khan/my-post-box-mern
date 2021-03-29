const {
    FETCH_ALL_POSTS_REQUEST,
    FETCH_ALL_POSTS_SUCCESS,
    FETCH_ALL_POSTS_FAILURE,
    
  } = require("./postTypes");
  
  const initialState = {
    loading: false,
    posts: [],
    post: null,
    error: "",
  };
  
  const postReducer = (state = initialState, action) => {
    switch (action.type) {
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