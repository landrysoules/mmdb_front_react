import SearchResults from './SearchResults'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    searchResults: state.searchResults
  }
}

const SearchResultsContainer = connect(
  mapStateToProps
)(SearchResults)

export default SearchResultsContainer
