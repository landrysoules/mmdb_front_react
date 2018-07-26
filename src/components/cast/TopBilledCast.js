import React from 'react';
import { IMAGE_PROFILE_PATH } from '../../constants/paths';
import './TopBilledCast.css';
import Img from 'react-image';
import { ClipLoader } from 'react-spinners';

const TopBilledCast = ({ cast, details }) => {
	return (
		<div className="col-md-2">
			<div
				className="panel panel-default panel-front action-link"
				onClick={() => {
					details(cast.id);
				}}
			>
				<div className="panel-heading">
					<h4 className="panel-title">
						<Img
							className="img-responsive"
							alt="actor thumbnail"
							width="183px"
							height="237px"
							src={`${IMAGE_PROFILE_PATH}/${cast.profile_path}`}
							loader={<ClipLoader />}
						/>
					</h4>
				</div>
				<div className="panel-body">
					<strong>{cast.name}</strong>
					<div>{cast.character}</div>
				</div>
			</div>
		</div>
	);
};

export default TopBilledCast;
