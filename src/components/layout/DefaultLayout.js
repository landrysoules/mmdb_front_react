import React from 'react';
import TopBar from '../top_bar/TopBar';
import ContentPanel from './ContentPanel';
import BottomPanel from './BottomPanel';
import SearchBar from '../search/SearchBar';

const DefaultLayout = () => (
  <div className="container-fluid">
    <TopBar />
    <SearchBar />
    <ContentPanel />
    <BottomPanel />
  </div>
);

export default DefaultLayout;
