import React, { Component } from 'react';
import Crew from './Crew';
import { connect } from 'react-redux';

class CrewContainer extends Component {
	render() {
		const crewElements = [...Array(4)].map((_, i) => {
    return <Crew crew={this.props.crew[i]} key={i} />;
		});

		return <div className="row">{crewElements}</div>;
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		crew: state.cast[ownProps.movieId].crew
	};
};

export default connect(mapStateToProps)(CrewContainer);
