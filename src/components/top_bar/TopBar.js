import React, { PureComponent } from 'react';
// import { Navbar } from 'react-bootstrap';
import './TopBar.css';
import { Link } from 'react-router-dom';
import logo from './tmdb-logo.svg';

class TopBar extends PureComponent {
	render() {
		return (
			<div className="row topbar">
				<div className="col-md-2" />
				<div className="col-md-1">
					<Link to="/">
						<img src={logo} alt="" />
					</Link>
				</div>
				<div className="col-md-5">
					<ul className="topbar">
						<li>
							<Link to="/discover">discover</Link>
						</li>
						<li>
							<Link to="/discover">movies</Link>
						</li>
						<li>
							<Link to="/discover">tv shows</Link>
						</li>
						<li>
							<Link to="/discover">people</Link>
						</li>
					</ul>
				</div>
				<div className="col-md-2" />
			</div>
		);
	}
}

export default TopBar;
