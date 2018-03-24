import React from 'react';
import { Route } from 'react-router-dom';
import HomeContent from '../home/HomeContent';
import DiscoverContent from '../discover/DiscoverContent';

const ContentPanel = () => (
  <div className="row">
    <div className="col-md-2" />
    <div className="col-md-8">
      <Route path="/" exact component={HomeContent} />
      <Route path="/discover" component={DiscoverContent} />
    </div>
    <div className="col-md-2" />
  </div>
);

export default ContentPanel;
