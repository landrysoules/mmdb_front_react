import React from 'react';
import { Navbar } from 'react-bootstrap';
import './TopBar.css';
import SearchContainer from './SearchContainer';
import { Link } from 'react-router-dom';
import logo from './tmdb-logo.svg';

const TopBar = () => (
  <div className="row topbar">
    <div className="col-md-2" />
    <div className="col-md-1">
      <img src={logo} alt="" />
    </div>
    <div className="col-md-3">
      <ul className="nav">
        <li>
          <Link to="/discover">discover</Link>
        </li>
        <li>movies</li>
        <li>tv shows</li>
        <li>people</li>
      </ul>
    </div>
    <div className="col-md-2" />
  </div>
);

export default TopBar;
