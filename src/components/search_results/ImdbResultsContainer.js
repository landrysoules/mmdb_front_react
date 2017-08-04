import ImdbResults from './ImdbResults'
import { connect } from 'react-redux'
import { importMovie } from '../../actions/import'

const mapStateToProps = state => {
  return {
    movies: state.searchResults.searchMovies.imdbMovies
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onImportClick: (event, imdbUrl) => {
      event.preventDefault() // You'd get WEIRD results without this one
      dispatch(importMovie(imdbUrl))
    }
  }
}


const ImdbResultsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImdbResults)

export default ImdbResultsContainer

// TODO: Find out how to pass prop movies to ImdbResults
// https://facebook.github.io/react/docs/higher-order-components.html
// https://discuss.reactjs.org/t/react-redux-app-passing-props-practices/5192/5
// Before all try to get movies directly : maybe props are accessible automatically from parent to children
