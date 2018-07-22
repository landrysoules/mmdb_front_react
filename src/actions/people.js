import { PEOPLE_DETAILS } from '../constants/action-types';
import { SOCIAL_LINKS } from '../constants/action-types';

export function peopleDetails(id) {
	return {
		type: PEOPLE_DETAILS,
		payload: {
			request: {
				url: `/person/${id}`,
				params: {
					api_key: process.env.REACT_APP_API_KEY
				}
			}
		}
	};
}

export function getPeopleDetails(id) {
	return (dispatch, getState) => {
		const details = getState().people[id];
		if (!details) {
			dispatch(peopleDetails(id));
		}
	};
}

export function socialLinks(id) {
	return {
		type: SOCIAL_LINKS,
		payload: {
			request: {
				url: `/person/${id}/external_ids`,
				params: {
					api_key: process.env.REACT_APP_API_KEY
				}
			}
		}
	};
}

export function getSocialLinks(id) {
	return (dispatch, getState) => {
		const details = getState().socialLinks[id];
		if (!details) {
			dispatch(socialLinks(id));
		}
	};
}
