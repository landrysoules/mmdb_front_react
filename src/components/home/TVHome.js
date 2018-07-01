import React from 'react';
import TVSticker from './TVSticker';
// import PropTypes from 'prop-types';
import { IMAGE_PATH, IMAGE_SMALL_PATH } from '../../constants/paths';
import './TVContent.css';

// FIXME: Replace cast with next airing date
const TVHome = ({ airingTVs, cast }) => (
	<div className="row">
		<div className="col-md-3" />
		<div className="row">
			<div className="col-md-12">
				<h2>On TV</h2>
			</div>
		</div>
		<div className="row">
			<div className="col-md-12 no-space">
				<TVSticker tv={airingTVs[1]} imagePath={IMAGE_SMALL_PATH} cast={cast[airingTVs[1].id]} width="246px" />
				<TVSticker tv={airingTVs[2]} imagePath={IMAGE_SMALL_PATH} cast={cast[airingTVs[2].id]} width="246px" />
			</div>
		</div>
		<div className="row">
			<div className="col-md-12 no-space">
				<TVSticker tv={airingTVs[0]} imagePath={IMAGE_PATH} cast={cast[airingTVs[0].id]} width="492px" />
			</div>
		</div>
	</div>
);

// TVHome.propTypes = {   airingTVs: PropTypes .arrayOf(PropTypes.object({id:
// PropTypes.number.isRequired}).isRequired) .isRequired,   cast: PropTypes
// .arrayOf(PropTypes.object({id: PropTypes.number.isRequired}).isRequired)
// .isRequired }

export default TVHome;
