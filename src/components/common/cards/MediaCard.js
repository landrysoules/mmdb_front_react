import React from 'react';
import Img from 'react-image';
import { IMAGE_PROFILE_PATH } from '../../../constants/paths';
import ClipLoader from 'react-spinners';
import './MediaCard.css';
import moment from 'moment';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Dotdotdot from 'react-dotdotdot';

const MediaCard = ({ details, movie }) => {
	const issueDate = moment(movie.release_date).format('LL');
	return (
		<div className="media-card">
			<div className="media-image">
				<Img
					className="img-responsive"
					alt="media thumbnail"
					width="183px"
					height="237px"
					src={`${IMAGE_PROFILE_PATH}/${movie.posterPath}`}
					// loader={<ClipLoader />}
				/>
			</div>
			<div className="media-info">
				<div>
					<div className="percent-circle">
						<span>
							<CircularProgressbar
								percentage={movie.vote_average * 10}
								strokeWidth="4"
								initialAnimation="true"
								background
								backgroundPadding={7}
								styles={{
									text: { fontSize: '30px', fill: '#01D277' },
									background: {
										fill: '#081C24'
									},
									path: {
										stroke: '#01D277'
									},
									trail: { stroke: 'transparent' }
								}}
							/>
						</span>
					</div>
					<div className="media-title">
						<div>
							<strong>{movie.title}</strong>
						</div>
						<div>{issueDate}</div>
					</div>
				</div>
				<div className="media-content">
					<Dotdotdot clamp={6}>{movie.overview}</Dotdotdot>
				</div>
				<p className="view_more">More info</p>
			</div>
		</div>
	);
};

export default MediaCard;
