import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movie from './Movie';
import { movie } from '../../actions/movie';

class MovieContainer extends Component {
  // Redux documentation (https://reactjs.org/docs/state-and-lifecycle.html) explicitely tells that componentWillMount should be avoided and that componentDidMount is the right place to call an API
  componentDidMount() {
    this.props.fetchMovie();
  }

  // Be carefull ! You have to pass as property to Movie, an element from store, otherwise your component won't be updated when state changes
  render = () => {
    return <Movie movie={this.props.movie.movie} />;
  };
}

const mapStateToProps = state => {
  return {
    movie: state.movie
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchMovie: () => {
      dispatch(movie(ownProps.match.params.movieId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
