import React from 'react';
import {Component} from 'react';
import {FormControl, FormGroup, Button} from 'react-bootstrap';
import Spinner from 'react-spinkit';
import './SearchBar.css';
import Autocomplete from './Autocomplete';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    // queryString isn't important outside of this component, so let's put it in
    // component's local state
    this.state = {
      queryString: '',
      value: ''
    };
    this.onSearchChange = this
      .onSearchChange
      .bind(this);
  }

  onSearchChange(event) {
    this.setState({queryString: event.target.value});
  }

  render() {
    let partial;
    if (this.props.loading) {
      partial = <Spinner name="circle" color="black"/>;
    } else {
      partial = (<span className="glyphicon glyphicon-search" aria-hidden="true"/>);
    }
    return (
      <div>
        <div className="row">
          <div className="col-md-2"/>
          <div className="col-md-8">
            {' '}
            <form
              onSubmit={e => {
              this
                .props
                .onSearchClick(e, this.state.queryString);
            }}>
              <FormGroup>
                <FormControl
                  type="text"
                  placeholder="Search"
                  value={this.state.queryString}
                  onChange={e => {
                  this.onSearchChange(e);
                }}
                  className="col-6"/>
              </FormGroup>{' '}
              <Button type="submit">{partial}</Button>
            </form>
          </div>
          <div className="col-md-2"/>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <Autocomplete dummyProp="dummy"/> {/* <SearchField/> */}
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
