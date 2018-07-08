import React from 'react';
import TopBilledCast from './TopBilledCast';
import { connect } from 'react-redux';
import { MOVIE_CAST_TYPE } from '../../constants/global';

class TopBilledCastContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render = () => {
		const casting = [ ...Array(5) ].map((_, i) => {
			return <TopBilledCast cast={this.props.cast[i]} key={i} />;
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
}

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
