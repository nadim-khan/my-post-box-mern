import { createStore, applyMiddleware } from 'redux';
import postReducer from './post/reducer';

///import redux devtools estension
import {composeWithDevTools} from 'redux-devtools-extension'

//import thunk for middleware
import thunk from 'redux-thunk'

const store = createStore(postReducer,composeWithDevTools(applyMiddleware(thunk)));
export default store;