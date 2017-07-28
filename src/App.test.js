import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { axios } from 'axios';
// import MockAdapter from 'axios-mock-adapter';
import { shallow } from 'enzyme';

it.skip('renders without crashing', () => {
  let wrapper = shallow(<App />);
  wrapper.getMovies = jest.fn();
// Mock.mockReturnValue('pop')
  // wrapper.update();
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  // let mock = new MockAdapter(axios);
  // mock.onGet('/api/movies').reply(200,
  //   [{
  //     name: 'The Big Lebowski',
  //     link: 'http://www.test.com'
  //   }]
  // )
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
});
