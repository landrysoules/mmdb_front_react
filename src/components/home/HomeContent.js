import React from 'react';
import TheaterContainer from './TheaterContainer';
import SeriesContainer from './TVContainer';

const HomeContent = () => (
  <div className="row">
    <div className="col-md-6">
      <SeriesContainer />
    </div>
    <div className="col-md-6">
      <TheaterContainer />
    </div>
  </div>
);

export default HomeContent;
