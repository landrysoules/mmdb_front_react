import React from 'react';
import TopBilledCast from './TopBilledCast';
import { connect } from 'react-redux';
import { MOVIE_CAST_TYPE } from '../../constants/global';

const TopBilledCastContainer = (props) => {
	const casting = [ ...Array(5) ].map((_, i) => {
		if (props.cast[i]) {
			return <TopBilledCast cast={props.cast[i]} key={i} />;
		}
		return null;
	});

	return (
		<div className="row">
			<div className="col-md-12">
				<h2>Top Billed Cast</h2>
				<div className="row display-flex">{casting}</div>
			</div>
		</div>
	);
};
// }

const mapStateToProps = (state, ownProps) => {
	if (ownProps.type === MOVIE_CAST_TYPE) {
		return {
			cast: state.cast[ownProps.id].cast
		};
	} else {
		return {
			cast: state.credits[ownProps.id].cast
		};
	}
};

export default connect(mapStateToProps)(TopBilledCastContainer);