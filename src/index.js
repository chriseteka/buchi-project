import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router, Route } from 'react-router-dom';
import history from "./utils/history";
import store from "./store";
import { Provider } from "react-redux";
import setAuthorizationHeader from './utils/setAuthorizationHeaders';

if (window.localStorage.JWT) {
  // const token = JSON.parse(localStorage.JWT);
  console.log(window.localStorage.JWT)
  setAuthorizationHeader(window.localStorage.JWT);
  // store.dispatch(userLoggedIn(user));
}


ReactDOM.render(<Provider store={store}>
  <Router history={history}>
    <Route component={App} />
  </Router>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
