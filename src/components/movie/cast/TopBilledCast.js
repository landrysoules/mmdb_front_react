import React from 'react';

const TopBilledCast = (cast) => {
  console.warn('cast1', cast);
  console.warn('cast2', cast.cast);
  console.warn('cast3', cast.cast.cast);
  console.warn('cast4', cast.cast.cast.result);

  const kast = cast&&cast.cast.cast.result&&cast.cast.cast.result.cast? cast.cast.cast.result.cast[0].name:null;
  return (
    <div className="row">
    <div className="col-md-12">
      <h2>Top Billed Cast {kast}</h2>
    </div>
    </div>
  )
}

export default TopBilledCast;
