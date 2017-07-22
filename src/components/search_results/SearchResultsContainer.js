import SearchResults from './SearchResults'
import { connect } from 'react-redux'
console.debug('HERE')

const mapStateToProps = state => {
  console.debug('mapStateToProps == >')
  console.debug(state.searchResults.searchMovies.movies)
  return {
    moviz: state.searchResults.searchMovies.movies
  }
}

const SearchResultsContainer = connect(
  mapStateToProps
)(SearchResults)

export default SearchResultsContainer
