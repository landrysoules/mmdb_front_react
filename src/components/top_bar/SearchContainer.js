import Search from './Search'
import { connect } from 'react-redux'
import { search } from '../../actions/search'

const mapStateToProps = state => {
  return {
    loading: state.searchResults.searchMovies.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchClick: (event, queryString) => {
      event.preventDefault() // You'd get WEIRD results without this one
      dispatch(search(queryString))
    },
    queryString: ''
  }
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

export default SearchContainer
