import {TV, TV_AIRING} from '../constants/action-types';

export function tv(tvId) {
  return {
    type: TV,
    payload: {
      request: {
        url: `/tv/${tvId}`,
        params: {
          api_key: process.env.REACT_APP_API_KEY
        }
      }
    }
  };
}

export function getAiringTvs() {
  return {
    type: TV_AIRING,
    payload: {
      request: {
        url: '/tv/on_the_air',
        params: {
          api_key: process.env.REACT_APP_API_KEY
        }
      }
    }
  };
}

export function getTv(tvId) {
  return (dispatch, getState) => {
    const teevee = getState().tv[tvId];
    if (!teevee) {
      dispatch(tv(tvId));
    }
  }
}
