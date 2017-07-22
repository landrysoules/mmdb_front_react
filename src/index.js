import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import mmdbApp from './reducers'
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

const client = axios.create({ //all axios can be used, shown in axios documentation
  baseURL:'http://localhost:3000/api',
  responseType: 'json'
});

let store = createStore(mmdbApp,
  applyMiddleware(
    axiosMiddleware(client), //second parameter options can optionally contain onSuccess, onError, onComplete, successSuffix, errorSuffix
  )
)

ReactDOM.render((
  <Provider store={store}>
    <App />
    </Provider>
), document.getElementById('root'));

registerServiceWorker();
