import React from 'react';
import TheaterContainer from './TheaterContainer';
import SeriesContainer from './TVContainer';
import './HomeContent.css';

const HomeContent = () => (
  <div>
  <div className="row">
    <div className="col-md-6">
      <SeriesContainer />
    </div>
    <div className="col-md-6">
      <TheaterContainer />
    </div>
  </div>
  <div className="row blank-row">
  </div>
  </div>
);

export default HomeContent;
