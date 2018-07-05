import React, { Component } from 'react';
import { connect } from 'react-redux';
import TV from './TV';
import { getTv } from '../../actions/tv';
import { getCast } from '../../actions/cast';

class TVContainer extends Component {
	componentDidMount() {
		this.props.getTv(this.props.match.params.showId);
		this.props.getCast(this.props.match.params.showId);
	}

	render() {
		return this.props.tv && this.props.cast ? <TV {...this.props.tv} {...this.props.cast} /> : null;
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		tv: state.tv[ownProps.match.params.showId],
		cast: state.cast[ownProps.match.params.showId]
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		getTv: (tvId) => {
			dispatch(getTv(tvId));
		},
		getCast: (tvId) => {
			dispatch(getCast(tvId));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TVContainer);
