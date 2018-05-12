import SearchBar from './SearchBar';
import { connect } from 'react-redux';
import { search } from '../../actions/search';

const mapStateToProps = state => {
  return {
    loading: state.searchResults.multiSearch.results.loading // Don't forget the reducer's name, here: searchResults
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchClick: (event, queryString) => {
      event.preventDefault(); // You'd get WEIRD results without this one
      dispatch(search(queryString));
    },
    queryString: ''
  };
};

const SearchBarContainer = connect(mapStateToProps, mapDispatchToProps)(
  SearchBar
);

export default SearchBarContainer;
