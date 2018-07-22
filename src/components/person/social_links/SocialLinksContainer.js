import React, { Component } from 'react';
import { getSocialLinks } from '../../../actions/people';
import { connect } from 'react-redux';
import SocialLinks from './SocialLinks';

class SocialLinksContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		this.props.getSocialLinks(this.props.id);
	}

	render() {
		if (this.props.socialLinks) {
			return <SocialLinks links={this.props.socialLinks} />;
		}
		return null;
	}
}
const mapStateToProps = (state, ownProps) => {
	return {
		socialLinks: state.socialLinks[ownProps.id]
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getSocialLinks: (id) => {
			dispatch(getSocialLinks(id));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SocialLinksContainer);
