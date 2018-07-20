import { PEOPLE_DETAILS } from '../constants/action-types';

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
