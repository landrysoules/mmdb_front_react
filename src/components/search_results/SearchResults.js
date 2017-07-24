import React from 'react'

const SearchResults = ({searchResults}) => {
  console.debug('searchResults')
  console.debug(searchResults)
  if (searchResults.searchMovies.error) {
    return (
      <h2>{searchResults.searchMovies.error.data}</h2>
    )
  } else {
    return (
      <table>
        <tbody>
          {searchResults.searchMovies.movies.map(movie => {
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
    )
  }
}
export default SearchResults;
