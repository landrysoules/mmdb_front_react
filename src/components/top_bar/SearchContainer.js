import Search from './Search'
import { connect } from 'react-redux'
import { search } from '../../actions/search'

const mapDispatchToProps = dispatch => {
  return {
    onSearchClick: (event, queryString) => {
      event.preventDefault()
      dispatch(search(queryString))
    },
    queryString: ''
  }
}

// const mapStateToProps = state => {
//   console.debug('mapStateToProps == >')
//   console.debug(state.searchResults.searchMovies.movies)
//   return {
//     searchQuery: state.searchQuery
//   }
// }



const SearchContainer = connect(
  null,
  mapDispatchToProps
)(Search)

export default SearchContainer
