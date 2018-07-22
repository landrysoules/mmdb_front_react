import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const SocialLinks = ({ links }) => {
	const facebook = (links) => {
		if (links.facebook_id) {
			return (
				<a href={`https://facebook.com/${links.facebook_id}`}>
					<FontAwesomeIcon icon={[ 'fab', 'facebook' ]} />
				</a>
			);
		}
	};
	const twitter = (links) => {
		if (links.twitter_id) {
			return (
				<a href={`https://twitter.com/${links.twitter_id}`}>
					<FontAwesomeIcon icon={[ 'fab', 'twitter' ]} />
				</a>
			);
		}
	};
	const instagram = (links) => {
		if (links.instagram_id) {
			return (
				<a href={`https://instagram.com/${links.instagram_id}`}>
					<FontAwesomeIcon icon={[ 'fab', 'instagram' ]} />
				</a>
			);
		}
	};
	return (
		<span>
			{facebook(links)} {twitter(links)} {instagram(links)}
		</span>
	);
};

export default SocialLinks;
