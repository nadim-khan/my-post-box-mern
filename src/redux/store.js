import { createStore, applyMiddleware } from "redux";
// import reducer
import postReducer from "./post/reducer";

// import redux dev tools extension
import { composeWithDevTools } from "redux-devtools-extension";

// import thunk
import thunk from "redux-thunk";

const store = createStore(
  postReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;