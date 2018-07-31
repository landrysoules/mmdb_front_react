import React, { Component } from 'react';
import NotYet from '../../common/building/NotYet';
import { getPopularMovies } from '../../../actions/movie';
import { connect } from 'react-redux';

export class Movies extends Component {
	componentDidMount() {
		this.props.getPopularMovies();
	}

	render = () => <NotYet />;
}
const mapDispatchToProps = (dispatch) => {
	return {
		getPopularMovies: () => {
			dispatch(getPopularMovies());
		}
	};
};

export default connect(null, mapDispatchToProps)(Movies);
