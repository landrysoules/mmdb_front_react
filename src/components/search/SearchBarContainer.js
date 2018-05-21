import {connect} from 'react-redux';
import {movie} from '../../actions/movie';
import SearchBar from './SearchBar';

const mapDispatchToProps = dispatch => {
  return {
    displayMovie: (movieId) => {
      dispatch(movie(movieId));
    }
  };
};

const SearchBarContainer = connect(null, mapDispatchToProps)(SearchBar);

export default SearchBarContainer;
