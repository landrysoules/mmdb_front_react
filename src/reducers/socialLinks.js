import { SOCIAL_LINKS, SOCIAL_LINKS_SUCCESS, SOCIAL_LINKS_FAIL } from '../constants/action-types';
const INITIAL_STATE = {
	error: null
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SOCIAL_LINKS:
			return {
				...state,
				error: null,
				loading: true
			};
		case SOCIAL_LINKS_SUCCESS:
			return {
				...state,
				[action.payload.data.id]: action.payload.data,
				error: null,
				loading: false
			};
		case SOCIAL_LINKS_FAIL:
			return {
				...state,
				error: action.error,
				loading: false
			};

		default:
			return state;
	}
}
