import React, {Component} from 'react';
import {Navbar, FormGroup, FormControl, Button} from 'react-bootstrap';
import axios from 'axios';
import App from '../App'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.runSearch = this.runSearch.bind(this);
  }

  handleChange(e) {
    this.setState({search: e.target.value});
  }

  runSearch(e) {
    alert('A name was submitted: ' + this.state.search);
    this.getMovies()
    e.preventDefault();
  }

  getMovies() {
    axios.get(`/api/movies/search?request=${this.state.search}`).then(response => {
      App.setState({movies: response.data});
    }).catch(error => {
      console.error('error : ' + error)
    })
  }


  render() {
    return (
      <form onSubmit={this.runSearch}>
        <Navbar.Form pullLeft>
          <FormGroup>
            <FormControl type="text" placeholder="Search" value={this.state.search} onChange={this.handleChange}/>
          </FormGroup>
          {' '}
          <Button type="submit">
            <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
          </Button>
        </Navbar.Form>
      </form>
    );
  }
}

export default Search;
