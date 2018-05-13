import Autocomplete from './Autocomplete';
import {connect} from 'react-redux';
import {movie} from '../../actions/movie';

const mapStateToProps = state => {
  return {
    loading: state.searchResults.multiSearch.results.loading // Don't forget the reducer's name, here: searchResults
  };
};

const mapDispatchToProps = dispatch => {
  return {
    displayMovie: (movieId) => {
      dispatch(movie(movieId));
    }
  };
};

const AutocompleteContainer = connect(mapStateToProps, mapDispatchToProps)(Autocomplete);

export default AutocompleteContainer;
