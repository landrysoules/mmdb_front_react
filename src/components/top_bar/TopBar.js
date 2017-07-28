import React from 'react';
import logo from './logo.png';
import {Navbar} from 'react-bootstrap';
import './TopBar.css';
import SearchContainer from './SearchContainer';

const TopBar = () => (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/home">
              <img alt="mmdb" src={logo}/>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <SearchContainer/>
        </Navbar.Collapse>
      </Navbar>
  )

export default TopBar;
