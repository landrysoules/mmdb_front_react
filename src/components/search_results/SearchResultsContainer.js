import SearchResults from './SearchResults'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  console.debug('mapStateToProps == >')
  console.debug(state.searchResults.searchMovies.movies)
  return {
    searchResults: state.searchResults
  }
}

const SearchResultsContainer = connect(
  mapStateToProps
)(SearchResults)

export default SearchResultsContainer
