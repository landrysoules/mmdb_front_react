import { PEOPLE_DETAILS, PEOPLE_DETAILS_SUCCESS, PEOPLE_DETAILS_FAIL } from '../constants/action-types';
const INITIAL_STATE = {
	error: null
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case PEOPLE_DETAILS:
			return {
				...state,
				error: null,
				loading: true
			};
		case PEOPLE_DETAILS_SUCCESS:
			return {
				...state,
				[action.payload.data.id]: action.payload.data,
				error: null,
				loading: false
			};
		case PEOPLE_DETAILS_FAIL:
			return {
				...state,
				error: action.error,
				loading: false
			};

		default:
			return state;
	}
}
