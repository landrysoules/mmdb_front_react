import Search from './Search'
import { connect } from 'react-redux'
import { search } from '../../actions/search'

const mapDispatchToProps = dispatch => {
  return {
    onSearchClick: (queryString) => {
      dispatch(search(queryString))
    }
  }
}

const TopBarContainer = connect(
  null,
  mapDispatchToProps
)(Search)

export default TopBarContainer
