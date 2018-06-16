import React from 'react';
import './Crew.css';

const Crew = (crew) => {
  return (
    <div className="col-md-4 crew-block">
      <span>
        <strong>{crew.crew.name}</strong><br/>{crew.crew.job}</span>
    </div>
  )
}

export default Crew;
