import React, { Component } from 'react';
import { connect } from 'react-redux';
import TV from './TV';
import { getTv } from '../../actions/tv';
import { getCast } from '../../actions/cast';

class TVContainer extends Component {
	componentDidMount() {
		this.props.getTv(this.props.match.params.showId);
		// this.props.getCredits(this.props.match.params.showId);
	}

	render() {
		// TODO: Try and understand how this props passing works !
		return this.props.tv && this.props.cast ? <TV tv={this.props.tv} cast={this.props.cast} /> : null;
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		tv: state.tv[ownProps.match.params.showId],
		cast: state.credits[ownProps.match.params.showId]
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getTv: (showId) => {
			dispatch(getTv(showId));
		}
		// ,
		// getCredits: (showId) => {
		// 	dispatch(getCast(showId));
		// }
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TVContainer);
