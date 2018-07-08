import React from 'react';
import { IMAGE_PROFILE_PATH } from '../../constants/paths';
import './TopBilledCast.css';

const TopBilledCast = (props) => {
	return (
		<div className="col-md-2">
			<div className="panel panel-default panel-front">
				<div className="panel-heading">
					{/* <h4 className="panel-title"><img className="img-responsive" width="174px" height="244px" src={`${IMAGE_PROFILE_PATH}/${cast.cast.profile_path}`}/></h4> */}
					<h4 className="panel-title">
						<img
							className="img-responsive"
							alt="actor thumbnail"
							width="183px"
							height="237px"
							src={`${IMAGE_PROFILE_PATH}/${props.cast.profile_path}`}
						/>
					</h4>
				</div>
				<div className="panel-body">
					<strong>{props.cast.name}</strong>
					<div>{props.cast.character}</div>
				</div>
			</div>
		</div>
	);
};

export default TopBilledCast;
