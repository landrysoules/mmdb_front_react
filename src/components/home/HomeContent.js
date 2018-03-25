import React from 'react';
import TVContent from './TVContent';
import TheaterContent from './TheaterContent';

const HomeContent = () => (
  <div className="row">
    <div className="col-md-6">
      <TVContent />
    </div>
    <div className="col-md-6">
      <TheaterContent />
    </div>
  </div>
);

export default HomeContent;
