import Select from 'react-select';
import 'react-select/dist/react-select.css';
import React from 'react';
import {Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'
import './Autocomplete.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class Autocomplete extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.onChange = this
      .onChange
      .bind(this);
    this.gotoMedia = this
      .gotoMedia
      .bind(this);
    this.renderOption = this
      .renderOption
      .bind(this);
  }

  getInitialState() {
    return {backspaceRemoves: true, multi: true, creatable: false};
  }

  onChange(value) {
    this.setState({value: value});
    if (value) {
      this.gotoMedia(value);
    }
  }

  getResults(input) {
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

  gotoMedia(value, event) {

    this
      .props
      .displayMovie(value.id)
    this
      .props
      .history
      .push(`/movie/${value.id}`)

  }

  renderOption(option) {
    console.debug('option', option);
    const mediaName = option.media_type === 'movie'
      ? option.original_title
      : option.original_name
    return <div>
      <span>{mediaName}</span>
      <span className="movie-type"><FontAwesomeIcon
        icon={option.media_type === 'movie'
      ? 'film'
      : 'tv'}/></span>
    </div>
  }

  filterOptions(options, filter, currentValues) {
    // For now, we just manage movies and tv, in the future, I hope I'll find time
    // to add persons and all other media_types To disable filtering, juste return
    // options
    return options.filter(option => {
      return option.media_type === 'movie' || option.media_type === 'tv';
    });
  }

  render() {
    const AsyncComponent = this.state.creatable
      ? Select.AsyncCreatable
      : Select.Async;

    return (
      <div className="section">
        <AsyncComponent
          multi={this.state.multi}
          value={this.state.value}
          onChange={this.onChange}
          filterOptions={this.filterOptions}
          valueKey="id"
          labelKey="original_title"
          loadOptions={this.getResults}
          backspaceRemoves={this.state.backspaceRemoves}
          optionRenderer={this.renderOption}/>
      </div>
    );
  }
};
// Here I have to use withRouter, since Autocomplete is not rendered by RR
// (since not in a Route). Great explanation here :
// https://tylermcginnis.com/react-router-programmatically-navigate/ I need it
// to change the route to /movie/xxx
export default withRouter(Autocomplete);
