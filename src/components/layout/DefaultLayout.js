import React from 'react';
import TopBar from '../top_bar/TopBar';
import ContentPanel from './ContentPanel';
import BottomPanel from './BottomPanel';
import AutocompleteContainer from '../search/AutocompleteContainer';

const DefaultLayout = () => (
  <div className="container-fluid">
    <TopBar/>
    <AutocompleteContainer/>
    <ContentPanel/>
    <BottomPanel/>
  </div>
);

export default DefaultLayout;
