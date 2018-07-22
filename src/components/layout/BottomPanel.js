import React from 'react';
import './BottomPanel.css';
import logo from '../top_bar/tmdb-logo.svg';

const BottomPanel = () => (
	<div className="row bottom-background">
		<div className="col-md-4" />
		<div className="col-md-8">
			<div className="row center-row">
				<div className="col-md-12">
					<img id="logo" src={logo} alt="" />
				</div>
			</div>
		</div>
	</div>
);

export default BottomPanel;
