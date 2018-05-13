import React from 'react';

const SearchMenuItem = ({media}) => (
  <div>
    <span>{media.original_title}</span>
    <span>{media.media_type}</span>
  </div>
)

export default SearchMenuItem;
