import React from 'react';
import { IMAGE_PROFILE_PATH_ORIGINAL } from '../../constants/paths';

const Person = ({ personData }) => {
	return (
		<div className="row">
			<div className="col-md-2" />
			<div className="col-md-2">
				<img
					width="302px"
					height="453px"
					src={`${IMAGE_PROFILE_PATH_ORIGINAL}/${personData.profile_path}`}
					alt="person's profile picture"
				/>
			</div>
			<div className="col-md-6">
				<div className="row">
					<div className="col-md-1" />
					<div className="col-md-10">
						<h1>{personData.name}</h1>
						<h2>Biography</h2>
						<p>{personData.biography}</p>
					</div>
					<div className="col-md-1" />
				</div>
			</div>
			<div className="col-md-2" />
		</div>
	);
};

export default Person;
