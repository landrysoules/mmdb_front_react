import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import mmdbApp from './reducers';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import logger from 'redux-logger';
import App from './App';
import { getBestAiringMovies } from './actions/airing_thunk';
import createSagaMiddleware from 'redux-saga';
// import rootSaga from './sagas/sagas';
import thunk from 'redux-thunk';
import { airingSeries } from './actions/airing_tv';

const client = axios.create({
  //all axios can be used, shown in axios documentation
  baseURL: process.env.REACT_APP_API_ROOT,
  responseType: 'json'
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
  mmdbApp,
  composeEnhancers(
    applyMiddleware(
      thunk,
      axiosMiddleware(client), //second parameter options can optionally contain onSuccess, onError, onComplete, successSuffix, errorSuffix. This middleware automatically calls state change (dispatch) when axios requests finish (success or failure)
      sagaMiddleware,
      logger
    )
  )
);

// sagaMiddleware.run(rootSaga);

store.dispatch(getBestAiringMovies());
store.dispatch(airingSeries());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}

// if (module.hot) {
//   // Enable Webpack hot module replacement for reducers
//   module.hot.accept('./reducers', () => {
//     const nextRootReducer = require('./reducers/index');
//     store.replaceReducer(nextRootReducer);
//   });
// }

registerServiceWorker();
