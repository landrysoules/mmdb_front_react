import Select from 'react-select';
import 'react-select/dist/react-select.css';
import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import './SearchBar.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			wrapperStyle: 'border: 0;'
		};
		this.onChange = this.onChange.bind(this);
		this.gotoMedia = this.gotoMedia.bind(this);
		this.renderOption = this.renderOption.bind(this);
		this.renderInput = this.renderInput.bind(this);
	}

	getInitialState() {
		return { backspaceRemoves: true, multi: true, creatable: false };
	}

	onChange(value) {
		this.setState({ value: value });
		if (value) {
			this.gotoMedia(value);
		}
	}

	getResults(input) {
		if (!input) {
			return Promise.resolve({ options: [] });
		}
		return axios
			.get(`${process.env.REACT_APP_API_ROOT}/search/multi?query=${input}`, {
				params: {
					api_key: process.env.REACT_APP_API_KEY
				}
			})
			.then((data) => {
				return { options: data.data.results };
			});
	}

	gotoMedia(value, event) {
		if (value.media_type === 'movie') {
			this.props.displayMovie(value.id);
			this.props.history.push(`/movie/${value.id}`);
			this.setState({ value: '' });
		} else {
			if (value.media_type === 'tv') {
				this.props.displayTV(value.id);
				this.props.history.push(`/tv/${value.id}`);
				this.setState({ value: '' });
			} else {
				if (value.media_type === 'person') {
					this.props.displayPerson(value.id);
					this.props.history.push(`/person/${value.id}`);
					this.setState({ value: '' });
				}
			}
		}
	}

	renderOption(option) {
		let mediaName;
		let icon;
		switch (option.media_type) {
			case 'movie': {
				mediaName = option.original_title;
				icon = 'film';
				break;
			}
			case 'tv': {
				mediaName = option.original_name;
				icon = 'tv';
				break;
			}
			case 'person': {
				mediaName = option.name;
				icon = 'user';
				break;
			}
		}
		return (
			<div>
				<span>{mediaName}</span>
				<span className="movie-type">
					<FontAwesomeIcon icon={icon} />
				</span>
			</div>
		);
	}

	renderInput() {
		return <input type="text" />;
	}

	renderArrow() {
		return null;
	}

	filterOptions(options, filter, currentValues) {
		// For now, we just manage movies and tv, in the future, I hope I'll find time
		// to add persons and all other media_types To disable filtering, juste return
		// options
		return options.filter((option) => {
			return option.media_type === 'movie' || option.media_type === 'tv' || option.media_type === 'person';
		});
		// return options;
	}

	render() {
		const AsyncComponent = this.state.creatable ? Select.AsyncCreatable : Select.Async;
		const placeholder = (
			<span>
				<FontAwesomeIcon icon="search" />
			</span>
		);

		return (
			<div className="row">
				<div className="col-md-2" />
				<div className="col-md-8">
					<AsyncComponent
						multi={this.state.multi}
						value={this.state.value}
						onChange={this.onChange}
						filterOptions={this.filterOptions}
						valueKey="id"
						labelKey="original_title"
						loadOptions={this.getResults}
						backspaceRemoves={this.state.backspaceRemoves}
						optionRenderer={this.renderOption}
						arrowRenderer={this.renderArrow}
						placeholder={placeholder}
						style={{ border: 0, boxShadow: 'none' }}
					/>
				</div>
				<div className="col-md-2" />
			</div>
		);
	}
}
// Here I have to use withRouter, since Autocomplete is not rendered by RR
// (since not in a Route). Great explanation here :
// https://tylermcginnis.com/react-router-programmatically-navigate/ I need it
// to change the route to /movie/xxx
export default withRouter(SearchBar);
