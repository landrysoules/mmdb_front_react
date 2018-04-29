import React from 'react';
import { Route } from 'react-router-dom';
import DiscoverContent from '../discover/DiscoverContent';
import HomeContent from '../home/HomeContent';
import MovieContainer from '../movie/MovieContainer';
import Movie from '../movie/Movie';

const ContentPanel = () => (
  <div className="row">
    <div className="col-md-2" />
    <div className="col-md-8">
      <Route path="/" exact component={HomeContent} />
      <Route path="/discover" component={DiscoverContent} />
      <Route path="/movie/:movieId" component={MovieContainer} />
    </div>
    <div className="col-md-2" />
  </div>
);

export default ContentPanel;
