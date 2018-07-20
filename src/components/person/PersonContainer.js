import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Person from './Person';
import { getPeopleDetails } from '../../actions/people';

class PersonContainer extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		this.props.getPerson(this.props.match.params.id);
	}

	render() {
		if (this.props.person) {
			return <Person personData={this.props.person} />;
		}
		return null;
	}
}
const mapStateToProps = (state, ownProps) => {
	return {
		person: state.people[ownProps.match.params.id]
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getPerson: (id) => {
			dispatch(getPeopleDetails(id));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonContainer);
