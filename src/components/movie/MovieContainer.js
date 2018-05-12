import React, {Component} from 'react';
import {connect} from 'react-redux';
import Movie from './Movie';
import {movie, getMovie} from '../../actions/movie';

// We'll use this component for both displaying selected movie from front page
// and displaying movie from search or direct url (ie bookmarked page). Hence we
// first lookup in the state if we find the required movie id, and if it's not
// present, we fetch it from the API.
class MovieContainer extends Component {
  // Redux documentation (https://reactjs.org/docs/state-and-lifecycle.html)
  // explicitely tells that componentWillMount should be avoided and that
  // componentDidMount is the right place to call an API
  componentDidMount() {
    this
      .props
      .getMovie(this.props.match.params.movieId);
  }

  // Be careful ! You have to pass as property to Movie, an element from store,
  // otherwise your component won't be updated when state changes
  render() {
    return <Movie movie={this.props.movie.movie}/>;
  };
}

const mapStateToProps = state => {
  return {movie: state.movie};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchMovie: () => {
      dispatch(movie(ownProps.match.params.movieId));
    },
    getMovie: movieId => {
      dispatch(getMovie(movieId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
