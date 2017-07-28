import React from 'react'
import {Component} from 'react'
import {Navbar, FormControl, FormGroup, Button} from 'react-bootstrap'

class Search extends Component {

  constructor(props) {
    super(props)
    // queryString isn't important outside of this component, so let's put it
    // in component's local state
    this.state = {
      queryString: ''
    };
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    this.setState({queryString: event.target.value});
  }

  render() {
    return (
      <form onSubmit={ e => {this.props.onSearchClick(e, this.state.queryString)}}>
        <Navbar.Form pullLeft>
          <FormGroup>
            <FormControl type="text" placeholder="Search" value={this.state.queryString} onChange={ e => {this.onSearchChange(e)}}/>
          </FormGroup>
          {' '}
          <Button type="submit">
            <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
          </Button>
        </Navbar.Form>
      </form>
    )
  }
}
export default Search;
