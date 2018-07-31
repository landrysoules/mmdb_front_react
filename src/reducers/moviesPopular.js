import { MOVIES_POPULAR, MOVIES_POPULAR_SUCCESS, MOVIES_POPULAR_FAIL } from '../constants/action-types';

const INITIAL_STATE = {
	error: null
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case MOVIES_POPULAR:
			return {
				...state,
				page: null,
				total_results: null,
				total_pages: null,
				error: null
			};
		//FIXME: Find a way to use method described here : https://alligator.io/redux/functional-redux-reducers-with-ramda/
		// Maybe via a middleware
		case MOVIES_POPULAR_SUCCESS:
			return {
				...state,
				[action.payload.data.id]: action.payload.data,
				page: null,
				total_results: null,
				total_pages: null,
				error: null
			};
		case MOVIES_POPULAR_FAIL:
			return {
				...state,
				error: action.error
			};

		default:
			return state;
	}
}
