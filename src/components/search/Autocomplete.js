import Select from 'react-select';
import 'react-select/dist/react-select.css';
import React from 'react';
import {Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'

class Autocomplete extends Component {

  // FIXME: Virer l'ancienne searchbar. Dans searchbarcontainer, lier autocomplete
  // a action movie.

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

  switchToMulti() {
    this.setState({
      multi: true,
      value: [this.state.value]
    });
  }

  switchToSingle() {
    this.setState({
      multi: false,
      value: this.state.value
        ? this.state.value[0]
        : null
    });
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
        return {options: data.data.results};
      });

    // return axios   .get(`https://api.github.com/search/users?q=${input}`)
    // .then((data) => {     return {options: data.data.items};   });
  }

  gotoUser(value, event) {
    // window.open(value.html_url);
    this
      .props
      .history
      .push(`/movie/${value.id}`)
  }

  toggleBackspaceRemoves() {
    this.setState({
      backspaceRemoves: !this.state.backspaceRemoves
    });
  }

  toggleCreatable() {
    this.setState({
      creatable: !this.state.creatable
    });
  }

  render() {
    const AsyncComponent = this.state.creatable
      ? Select.AsyncCreatable
      : Select.Async;

    return (
      <div className="section">
        <h3 className="section-heading">{this.props.label}
          <a
            href="https://github.com/JedWatson/react-select/tree/master/examples/src/components/GithubUsers.js">(Source)</a>
        </h3>
        <AsyncComponent multi={this.state.multi} value={this.state.value} onChange={this.onChange} onValueClick={this.gotoUser} // valueKey="id"
          // labelKey="login"
          valueKey="id" labelKey="original_title" loadOptions={this.getUsers} backspaceRemoves={this.state.backspaceRemoves}/> {/* <div className="checkbox-list">
          <label className="checkbox">
            <input
              type="radio"
              className="checkbox-control"
              checked={this.state.multi}
              onChange={this.switchToMulti}/>
            <span className="checkbox-label">Multiselect</span>
          </label>
          <label className="checkbox">
            <input
              type="radio"
              className="checkbox-control"
              checked={!this.state.multi}
              onChange={this.switchToSingle}/>
            <span className="checkbox-label">Single Value</span>
          </label>
        </div> */}
        {/* <div className="checkbox-list">
          <label className="checkbox">
            <input
              type="checkbox"
              className="checkbox-control"
              checked={this.state.creatable}
              onChange={this.toggleCreatable}/>
            <span className="checkbox-label">Creatable?</span>
          </label>
          <label className="checkbox">
            <input
              type="checkbox"
              className="checkbox-control"
              checked={this.state.backspaceRemoves}
              onChange={this.toggleBackspaceRemoves}/>
            <span className="checkbox-label">Backspace Removes?</span>
          </label>
        </div> */}
      </div>
    );
  }
};

export default withRouter(Autocomplete);
