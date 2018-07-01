import { TV, TV_SUCCESS, TV_FAIL } from '../constants/action-types';
const INITIAL_STATE = {
	error: null
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case TV:
			return {
				...state,
				error: null,
				loading: true
			};
		case TV_SUCCESS:
			return {
				...state,
				[action.payload.data.id]: action.payload.data,
				error: null,
				loading: false
			};
		case TV_FAIL:
			return {
				...state,
				error: action.error,
				loading: false
			};

		default:
			return state;
	}
}
