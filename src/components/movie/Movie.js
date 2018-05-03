import React from 'react';
import { ClipLoader } from 'react-spinners';
import './Movie.css';
import Style from 'style-it';

const Movie = movie => {
  const fetchedMovie = movie.movie.result;
  // const displayMovie = fetchedMovie ? fetchedMovie

  if (fetchedMovie) {
    return (
      <Style>
        {`
        div.header.large.first:before {
          content: '';
          position: absolute;
          left: 0; 
          right: 0;
          width: 100%;
          height: 97%;
          z-index: -1;
          display: block;
          filter: opacity(0) grayscale(100%) contrast(130%);
          background-size: cover;
          background-repeat: no-repeat;
          background-position: 50% 50%;
          background-image: url(https://image.tmdb.org/t/p/w1400_and_h450_face${
            fetchedMovie.backdrop_path
          });
          will-change: opacity;
          transition: filter 1s;
        }

div.header.large.first.lazyloaded:before {
  filter: opacity(100) grayscale(100%) contrast(130%);
}
        `}
        <div className="row">
          <div className="col-md-12 full-width">
            <div className="header large first lazyloaded custom_bg">
              {/* <div className="custom_bg"> */}
              <div className="row">
                <div className="col-md-2" />
                <div className="col-md-2 poster">
                  <img
                    src={
                      'https://image.tmdb.org/t/p/w300_and_h450_bestv2' +
                      fetchedMovie.poster_path
                    }
                    alt={fetchedMovie.title}
                  />
                </div>
                <div className="col-md-4 movie-block">
                  <h2>{fetchedMovie.title}</h2>
                  <h3>Overview</h3>
                  <div>{fetchedMovie.overview}</div>
                </div>
                <div className="col-md-4" />
              </div>

              {/* </div> */}
            </div>
            {/* <img
            className="back-cover"
            src={
              'https://image.tmdb.org/t/p/original/' +
              fetchedMovie.backdrop_path
            }
          /> */}
            {/* {fetchedMovie.original_title} */}
          </div>
        </div>
      </Style>
    );
  } else {
    return <ClipLoader />;
  }
};

export default Movie;
