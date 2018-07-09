import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

Reactotron.configure() // we can use plugins here -- more on this later
	.use(reactotronRedux())
	.use(sagaPlugin())
	.connect(); // let's connect!
