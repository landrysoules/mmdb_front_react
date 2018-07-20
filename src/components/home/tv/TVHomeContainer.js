import { connect } from 'react-redux';
import React from 'react';
import TVHome from './TVHome';

const TVHomeContainer = (props) => {
	// if ((state.airingTVs.loading === false) && (state.cast.loading === false) && (state.cast[state.airingTVs.ids[0]]) && (state.cast[state.airingTVs.ids[1]]) && (state.cast[state.airingTVs.ids[2]])) {
	//   //FIXME: ne pas afficher tant que les tvs ne sont pas charges. Quand c'est ok, c'est les tvs qu'on envoie a TVHome, et non pas airingTvs
	//   return <TVHome airingTVs={state.airingTVs.ids} cast={state.cast}/>;
	// }
	if (props.airingTVs.loading || props.credits.loading) {
		return null;
	}
	const topAiringTVids = props.airingTVs.ids.slice(0, 3);
	const topAiringTVs = [];

	for (const id of topAiringTVids) {
		if (props.tv[id]) {
			topAiringTVs.push(props.tv[id]);
		}
		if (!props.credits[id]) {
			return null;
		}
	}
	if (topAiringTVs.length < 3) {
		return null;
	}

	return <TVHome airingTVs={topAiringTVs} credits={props.credits} />;
};

// const checkState = (state) => {};

const mapStateToProps = (state) => {
	return { airingTVs: state.tvAiring, credits: state.credits, tv: state.tv };
};

export default connect(mapStateToProps)(TVHomeContainer);
