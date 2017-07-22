import React, {Component} from 'react';
import {Navbar, FormGroup, FormControl, Button} from 'react-bootstrap';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({search: e.target.value});
  }


  render() {
    return (
      <form onSubmit={this.props.onSearchClick(this.state.search)}>
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
