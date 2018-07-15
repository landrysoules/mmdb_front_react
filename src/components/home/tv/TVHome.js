import React from 'react';
import TVSticker from './TVSticker';
import PropTypes from 'prop-types';
import { IMAGE_PATH, IMAGE_SMALL_PATH } from '../../../constants/paths';
import './TVContent.css';

// FIXME: Replace cast with next airing date
const TVHome = ({ airingTVs, credits }) => (
	<div className="row">
		<div className="col-md-3" />
		<div className="row">
			<div className="col-md-12">
				<h2>On TV</h2>
			</div>
		</div>
		<div className="row">
			<div className="col-md-12 no-space">
				<TVSticker
					cs="sticker sticker-left"
					tv={airingTVs[1]}
					imagePath={IMAGE_SMALL_PATH}
					cast={credits[airingTVs[1].id]}
				/>
				<TVSticker
					cs="sticker sticker-right"
					tv={airingTVs[2]}
					imagePath={IMAGE_SMALL_PATH}
					cast={credits[airingTVs[2].id]}
				/>
			</div>
		</div>
		<div className="row">
			<div className="col-md-12 no-space">
				<TVSticker
					cs="sticker main-sticker"
					tv={airingTVs[0]}
					imagePath={IMAGE_PATH}
					cast={credits[airingTVs[0].id]}
				/>
			</div>
		</div>
	</div>
);

TVHome.propTypes = {
	airingTVs: PropTypes.array,
	credits: PropTypes.object
};

export default TVHome;
