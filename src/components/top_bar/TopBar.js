import React, {Component} from 'react';
import logo from './logo.png';
import {Navbar} from 'react-bootstrap';
import './TopBar.css';
import Search from './Search';

class TopBar extends Component {

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/home">
              <img alt="Brand" src={logo}/>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Search/>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopBar;
