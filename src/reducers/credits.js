import { CREDITS, CREDITS_SUCCESS, CREDITS_FAIL } from '../constants/action-types';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case CREDITS:
			return {
				...state
			};
		case CREDITS_SUCCESS:
			return {
				...state,
				[action.payload.data.id]: action.payload.data
			};
		case CREDITS_FAIL:
			return {
				...state,
				error: action.error
			};

		default:
			return state;
	}
}
