import React from 'react'
const ImdbResults = ({ movies, onImportClick}) => {
  console.debug(movies)
  if (movies.length > 0) {
    return(
    <div className = "row">
      <div className="col-md-12">
        <div className="row">Not yet present in MMDB: </div>
          <div className = "row">
            { movies.map(movie => {
              return(
              <div className = "row" key={movie.link}>
                <div className="col-md-2"><img alt={movie.name} src={movie.image}/></div>
                <div className="col-md-8"><a href={`http://www.imdb.com${movie.link}`} rel="noopener noreferrer" target="_blank">{movie.name}</a></div>
                <div className="col-md-2"><button type="button" className="btn btn-default" onClick={ e => {onImportClick(e, movie.link)}}>
                  <span className="glyphicon glyphicon-download" aria-hidden="true"></span> Import into mmdb
                    </button>
                </div>
              </div>
            )})
            }
        </div>
      </div>
    </div>
  )}else{
    return null
  }
}

export default ImdbResults
