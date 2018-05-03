import React from 'react';
import './TheaterContent.css';
import { IMAGE_PATH, IMAGE_SMALL_PATH } from '../../constants/paths';

const TVContent = ({ airingSeries }) => {
  console.debug('airingSeries', airingSeries);
  const seriesList = airingSeries => {
    if (airingSeries.series.results.length === 0) {
      return null;
    }
    return (
      <div>
        <div className="row">
          <div className="col-md-5" />
          <div className="col-md-7">
            <h2>On TV</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5" />
          <div className="col-md-7">
            <span className="TheaterContent">
              <img
                alt={airingSeries.series.results[1].name}
                src={`${IMAGE_SMALL_PATH}${
                  airingSeries.series.results[1].backdrop_path
                }`}
              />
              <span className="description">
                {airingSeries.series.results[1].name}
              </span>
            </span>
            <span className="TheaterContent">
              <img
                alt={airingSeries.series.results[2].name}
                src={`${IMAGE_SMALL_PATH}${
                  airingSeries.series.results[2].backdrop_path
                }`}
              />
              <span className="description">
                {airingSeries.series.results[2].name}
              </span>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5" />
          <div className="col-md-7">
            <div className="TheaterContent">
              <img
                alt={airingSeries.series.results[0].name}
                src={`${IMAGE_PATH}${
                  airingSeries.series.results[0].backdrop_path
                }`}
              />
              <span className="description">
                {airingSeries.series.results[0].name}
              </span>
              {/* <ul>
            {airingSeries.series.results[0].casting.data.cast.map(function(
              movie
            ) {
              return <li key={movie.id}>{movie.name}</li>;
            })}
          </ul> */}
            </div>
          </div>
        </div>
      </div>
    );
  };
  return seriesList(airingSeries);
};

export default TVContent;
