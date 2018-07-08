import React from 'react';
import Crew from './Crew';
import { connect } from 'react-redux';
import { MOVIE_CAST_TYPE } from '../../constants/global';

const CrewContainer = (props) => {
	const crewElements = [ ...Array(4) ].map((_, i) => {
		if (props.crew[i]) {
			return <Crew crew={props.crew[i]} key={i} />;
		} else {
			return <div />;
		}
	});
	if (props.crew.length === 0) {
		return <div />;
	} else {
		return (
			<div>
				<h3> Featured Crew</h3> <div className="row">{crewElements}</div>
			</div>
		);
	}
};

const mapStateToProps = (state, ownProps) => {
	const castOrCredits = ownProps.type === MOVIE_CAST_TYPE ? 'cast' : 'credits';
	return {
		crew: state[castOrCredits][ownProps.id].crew
	};
};

export default connect(mapStateToProps)(CrewContainer);
