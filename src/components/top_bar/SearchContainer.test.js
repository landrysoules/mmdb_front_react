import React from 'react';
import ReactDOM from 'react-dom';
import SearchContainer from './SearchContainer';
import {shallow, mount} from 'enzyme';
import { Provider } from 'react-redux';

//These are used to pass a mock store down through nested components
import configureStore from 'redux-mock-store';
it('renders without crashing', () => {
  const mockStore = configureStore([]);
  const store = mockStore({'searchResults': {'searchMovies': []}});
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><SearchContainer /></Provider>, div);
});