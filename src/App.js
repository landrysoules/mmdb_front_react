import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import DefaultLayout from './components/layout/DefaultLayout';
import fontawesome from '@fortawesome/fontawesome';
import faFilm from '@fortawesome/fontawesome-free-solid/faFilm';
import faTv from '@fortawesome/fontawesome-free-solid/faTv';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';

class App extends Component {
  componentDidMount() {
    fontawesome
      .library
      .add(faFilm, faTv, faSearch);
  }

  render() {
    return (
      <BrowserRouter>
        <DefaultLayout/>
      </BrowserRouter>
    );
  }
}

export default App;
