import React from 'react';

const PersonalInfo = ({ data }) => {
	return (
		<div>
			<div>
				<h3>Personal Info</h3>
			</div>
			<h4>Known for</h4>
			<div>{data.known_for_department}</div>
			<h4>Gender</h4>
			<div>{data.gender === 1 ? 'Female' : 'Male'}</div>
			<h4>Birthday</h4>
			<div>{data.birthday}</div>
			<h4>Place of Birth</h4>
			<div>{data.place_of_birth}</div>
		</div>
	);
};

export default PersonalInfo;
