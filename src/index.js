import './ReactotronConfig';
import Reactotron from 'reactotron-react-js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'react-redux';
import { applyMiddleware, compose } from 'redux';
import mmdbApp from './reducers';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import logger from 'redux-logger';
import App from './App';
import { getAiringMovies } from './actions/movie';
import createSagaMiddleware from 'redux-saga';
import { castSaga, movieSaga, tvSaga } from './sagas/sagas';
import thunk from 'redux-thunk';
import { getAiringTvs } from './actions/tv';

const client = axios.create({
	//all axios can be used, shown in axios documentation
	baseURL: process.env.REACT_APP_API_ROOT,
	responseType: 'json'
});

// create our new saga monitor
const sagaMonitor = Reactotron.createSagaMonitor();

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = Reactotron.createStore(
	mmdbApp,
	composeEnhancers(
		applyMiddleware(
			thunk,
			axiosMiddleware(client), //second parameter options can optionally contain onSuccess, onError, onComplete, successSuffix, errorSuffix. This middleware automatically calls state change (dispatch) when axios requests finish (success or failure)
			sagaMiddleware, // Careful here : if you declare saga before axios, your sagas won't be triggered !!
			logger
		)
	)
);

// if (process.env.NODE_ENV !== 'production') {
// 	const { whyDidYouUpdate } = require('why-did-you-update');
// 	whyDidYouUpdate(React);
// }

sagaMiddleware.run(movieSaga);
sagaMiddleware.run(tvSaga);
sagaMiddleware.run(castSaga);

store.dispatch(getAiringMovies());
store.dispatch(getAiringTvs());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// if (module.hot) {   module.hot.accept(); } Cool feature (doesn't reload all
// the page when in dev, but only the dom concerned by your changes), but you
// need to reload the server when you change a saga if (module.hot) {   //
// Enable Webpack hot module replacement for reducers
// module.hot.accept('./reducers', () => {     const nextRootReducer =
// require('./reducers/index');     store.replaceReducer(nextRootReducer);   });
// }

registerServiceWorker();
