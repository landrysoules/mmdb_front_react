import Select from 'react-select';
import 'react-select/dist/react-select.css';
import React from 'react';
import {Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'

class Autocomplete extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.onChange = this
      .onChange
      .bind(this);
    this.gotoUser = this
      .gotoUser
      .bind(this);
  }

  getInitialState() {
    return {backspaceRemoves: true, multi: true, creatable: false};
  }

  onChange(value) {
    this.setState({value: value});
  }

  getUsers(input) {
    if (!input) {
      return Promise.resolve({options: []});
    }
    return axios
      .get(`${process.env.REACT_APP_API_ROOT}/search/multi?query=${input}`, {
      params: {
        api_key: process.env.REACT_APP_API_KEY
      }
    })
      .then((data) => {
        console.debug('Options: ', data.data.results);
        return {options: data.data.results};
      });

  }

  gotoUser(value, event) {

    this
      .props
      .displayMovie(value.id)
    this
      .props
      .history
      .push(`/movie/${value.id}`)

  }

  filterOptions(options, filter, currentValues) { // Do no filtering, just return all options
    return options;
  }

  render() {
    const AsyncComponent = this.state.creatable
      ? Select.AsyncCreatable
      : Select.Async;

    return (
      <div className="section">
        <AsyncComponent multi={this.state.multi} value={this.state.value} onChange={this.onChange} onValueClick={this.gotoUser} // valueKey="id"
          valueKey="id" labelKey="original_title" loadOptions={this.getUsers} backspaceRemoves={this.state.backspaceRemoves}/>
      </div>
    );
  }
};
// Here I have to use withRouter, since Autocomplete is not rendered by RR
// (since not in a Route). Great explanation here :
// https://tylermcginnis.com/react-router-programmatically-navigate/
export default withRouter(Autocomplete);
