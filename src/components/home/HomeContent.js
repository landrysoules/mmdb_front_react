import React from 'react';
import TheaterContainer from './theater/TheaterContainer';
import './HomeContent.css';
import TVHomeContainer from './tv/TVHomeContainer';

const HomeContent = () => (
	<div>
		<div className="row">
			<div className="col-md-3" />
			<div className="col-md-3">
				<TVHomeContainer />
			</div>
			<div className="col-md-3">
				<TheaterContainer />
			</div>
		</div>
		<div className="row blank-row" />
	</div>
);

export default HomeContent;
