import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import {
  createStore,
  applyMiddleware
} from 'redux';

import App from './app/app.jsx';
import rootReducer from './reducers';

const middleware = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);