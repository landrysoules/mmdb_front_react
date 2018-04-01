import React from 'react';
import { Route } from 'react-router-dom';
import HomeContent from '../home/HomeContainer';
import DiscoverContent from '../discover/DiscoverContent';
import HomeContainer from '../home/HomeContainer';

const ContentPanel = () => (
  <div className="row">
    <div className="col-md-2" />
    <div className="col-md-8">
      <Route path="/" exact component={HomeContainer} />
      <Route path="/discover" component={DiscoverContent} />
    </div>
    <div className="col-md-2" />
  </div>
);

export default ContentPanel;
