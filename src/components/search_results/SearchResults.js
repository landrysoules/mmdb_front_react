import React from 'react'
import ImdbResultsContainer from './ImdbResultsContainer'

const SearchResults = ({searchResults}) => {
  if (searchResults.searchMovies.error) {
    return (
      <h2>{searchResults.searchMovies.error.data}</h2>
    )
  } else {
    return (
      <div className="row">
      <div className="col-lg-12">
      <div className="row">
      <table>
        <tbody>
          {searchResults.searchMovies.localMovies.map(movie => {
            if (movie.name) {
              return (
                <tr key={movie._id.$oid}>
                  <td>{movie.name}</td>
                  <td>{movie.year}</td>
                </tr>
              )
            }
            return ''
          })}
        </tbody>
      </table>
    </div>
    {/* <ImdbResultsContainer movies={ searchResults.searchMovies.imdbMovies }/> */}
    <ImdbResultsContainer/>
  </div>
  </div>

    )
  }
}
export default SearchResults;
