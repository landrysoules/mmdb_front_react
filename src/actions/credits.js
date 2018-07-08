import { CREDITS } from '../constants/action-types';

export function credits(showId) {
	return {
		type: CREDITS,
		payload: {
			request: {
				url: `/tv/${showId}/credits`,
				params: {
					api_key: process.env.REACT_APP_API_KEY
				}
			}
		}
	};
}

export function getCredits(showId) {
	return (dispatch, getState) => {
		const creds = getState().cast[showId];
		if (!creds) {
			dispatch(credits(showId));
		}
	};
}
