import React from 'react';
import TopBar from '../top_bar/TopBar';
import ContentPanel from './ContentPanel';
import BottomPanel from './BottomPanel';
import SearchBarContainer from '../search/SearchBarContainer';

const DefaultLayout = () => (
  <div className="container-fluid">
    <TopBar/>
    <SearchBarContainer/>
    <ContentPanel/>
    <BottomPanel/>
  </div>
);

export default DefaultLayout;
