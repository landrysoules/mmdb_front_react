import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import DefaultLayout from './components/layout/DefaultLayout';
import fontawesome from '@fortawesome/fontawesome';
import faFilm from '@fortawesome/fontawesome-free-solid/faFilm';
import faTv from '@fortawesome/fontawesome-free-solid/faTv';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';
import { fab } from '@fortawesome/free-brands-svg-icons';

class App extends Component {
	componentDidMount() {
		fontawesome.library.add(faFilm, faTv, faSearch, faUser, fab);
	}

	render() {
		return (
			<BrowserRouter>
				<DefaultLayout />
			</BrowserRouter>
		);
	}
}

export default App;
