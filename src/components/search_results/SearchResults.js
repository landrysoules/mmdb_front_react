import React from 'react'

const SearchResults = ({moviz}) => (
          <table>
            <tbody>
              {moviz.map(movie => {
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

export default SearchResults;
