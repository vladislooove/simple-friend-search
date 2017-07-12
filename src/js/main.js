import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

//components
import App from './components/App'

//reducers
import friends from './reducers/friends';

const allReducers = combineReducers({
    friends: friends
});

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.querySelector('#root'))

