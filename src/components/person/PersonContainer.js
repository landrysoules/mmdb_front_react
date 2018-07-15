import React from 'react';
import { connect } from 'react-redux';

const PersonContainer = () => {};

const mapStateToProps = (state, ownProps) => {
	return {
		person: state.person[ownProps.match.params.showId]
	};
};

export default connect(mapStateToProps)(PersonContainer);
