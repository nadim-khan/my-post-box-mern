import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
// import reportWebVitals from './reportWebVitals';

//add store
import store from './redux/store';
//import provider from react redux
import {Provider} from 'react-redux'


ReactDOM.render(
  <Provider store={store}>
  <App />
</Provider>,
  document.getElementById('root')
);

reportWebVitals();

//master commit m1
//master commit m2
//master commit m3


