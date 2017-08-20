import React from 'react'
import ImdbResultsContainer from './ImdbResultsContainer'

const SearchResults = ({searchResults}) => {
  if (searchResults.searchMovies.error) {
    return (
      <h2>{searchResults.searchMovies.error.data}</h2>
    )
  } else {
    return (
      <div>
      <div className="bs-callout bs-callout-warning">
        <h4>From MMDB</h4>
      </div>

    <ImdbResultsContainer/>
  </div>

    )
  }
}
export default SearchResults;
