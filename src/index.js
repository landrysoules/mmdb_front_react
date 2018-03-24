import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import mmdbApp from './reducers'
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import logger from 'redux-logger'
import App from './App'

const client = axios.create({ //all axios can be used, shown in axios documentation
  baseURL:process.env.REACT_APP_API_ROOT,
  //baseURL:'https://mmdb.spaceinvade.rs/api',
  responseType: 'json'
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(mmdbApp, composeEnhancers(
  applyMiddleware(
    axiosMiddleware(client), //second parameter options can optionally contain onSuccess, onError, onComplete, successSuffix, errorSuffix
    logger
  )
)
)

ReactDOM.render((
  <Provider store={store}>
    <App />
    </Provider>
), document.getElementById('root'));

registerServiceWorker();
