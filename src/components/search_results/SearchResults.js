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
      <div className="bs-callout bs-callout-warning">
        <h4>From MMDB</h4>
      </div>
      {/* <table>
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
      </table> */}

    </div>
    {/* <ImdbResultsContainer movies={ searchResults.searchMovies.imdbMovies }/> */}
    <ImdbResultsContainer/>
    {/* <div className="card" style={{width: '20rem'}}>
      <img className="card-img-top" src="..." alt="Card cap" />
      <div className="card-block">
        <h4 className="card-title">Card title</h4>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div> */}
  </div>
  </div>

    )
  }
}
export default SearchResults;
