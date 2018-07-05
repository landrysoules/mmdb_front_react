import { connect } from 'react-redux';
import React from 'react';
import TVHome from './TVHome';

const TVHomeContainer = (state) => {
	// if ((state.airingTVs.loading === false) && (state.cast.loading === false) && (state.cast[state.airingTVs.ids[0]]) && (state.cast[state.airingTVs.ids[1]]) && (state.cast[state.airingTVs.ids[2]])) {
	//   //FIXME: ne pas afficher tant que les tvs ne sont pas charges. Quand c'est ok, c'est les tvs qu'on envoie a TVHome, et non pas airingTvs
	//   return <TVHome airingTVs={state.airingTVs.ids} cast={state.cast}/>;
	// }
	if (state.airingTVs.loading || state.cast.loading) {
		return null;
	}
	const topAiringTVids = state.airingTVs.ids.slice(0, 3);
	const topAiringTVs = [];

	for (const id of topAiringTVids) {
		if (state.tv[id]) {
			topAiringTVs.push(state.tv[id]);
		}
		if (!state.cast[id]) {
			return null;
		}
	}
	if (topAiringTVs.length < 3) {
		return null;
	}

	return <TVHome airingTVs={topAiringTVs} cast={state.cast} />;
};

// const checkState = (state) => {};

const mapStateToProps = (state) => {
	return { airingTVs: state.tvAiring, cast: state.cast, tv: state.tv };
};

export default connect(mapStateToProps)(TVHomeContainer);
