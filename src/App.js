import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import DefaultLayout from './components/layout/DefaultLayout';

class App extends Component {
  // componentWillMount() {
  //   this.getMovies();
  // };

  render() {
    return (
      <BrowserRouter>
        <DefaultLayout />
      </BrowserRouter>
    );
  }
}

export default App;
