import React from 'react';

const Moovie = movie => {
  const fetchedMovie = movie.movie.result;
  // const displayMovie = fetchedMovie ? fetchedMovie
  return (
    <div className="row">
      <div className="col-md-12 movie-detail">
        {fetchedMovie ? fetchedMovie.original_title : null}
      </div>
    </div>
  );
};

export default Moovie;
