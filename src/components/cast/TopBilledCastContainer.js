import React, { PureComponent } from 'react';
import TopBilledCast from './TopBilledCast';
import { connect } from 'react-redux';
import { MOVIE_CAST_TYPE } from '../../constants/global';
import { peopleDetails } from '../../actions/people';
import { withRouter } from 'react-router-dom';

class TopBilledCastContainer extends PureComponent {
	constructor(props, context) {
		super(props, context);
		// It is the same thing, only difference is Component where we do the binding.
		// Component is lower in the tree, and now button has the logic how to open the screen.
		this.goToPeople = this.goToPeople.bind(this);
	}
	render() {
		const casting = [ ...Array(5) ].map((_, i) => {
			if (this.props.cast[i]) {
				return <TopBilledCast cast={this.props.cast[i]} details={this.goToPeople} key={i} />;
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
	}

	goToPeople(id) {
		console.warn('********** Called goToPeople for id ' + id);
		this.props.peopleDetails(id);
		this.props.history.push(`/person/${id}`);
	}
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

const mapDispatchToProps = (dispatch) => {
	return {
		peopleDetails: (id) => {
			dispatch(peopleDetails(id));
		}
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopBilledCastContainer));
