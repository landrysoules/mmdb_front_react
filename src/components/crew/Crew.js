import React from 'react';
import './Crew.css';

const Crew = (props) => {
	return (
		<div className="col-md-4 crew-block">
			<span>
				<strong>{props.crew.name}</strong>
				<br />
				{props.crew.job}
			</span>
		</div>
	);
};

export default Crew;
