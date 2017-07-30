import React from 'react'
import ImdbResults from './ImdbResults'

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
    <ImdbResults movies={ searchResults.searchMovies.imdbMovies }/>
  </div>
  </div>

    )
  }
}
export default SearchResults;
