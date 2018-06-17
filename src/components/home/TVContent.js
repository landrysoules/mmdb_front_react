import React from 'react';
import './TVContent.css';
import {IMAGE_PATH, IMAGE_SMALL_PATH} from '../../constants/paths';
import TVSticker from './TVSticker';

const TVContent = ({airingSeries, tvs, cast}) => {
  const tvList = airingSeries => {
    if (!airingSeries) {
      return null;
    }
    if (!tvs) 
      return null;
    if (!airingSeries.ids) {
      return null;
    }
    if (!tvs[airingSeries.ids[2]]) {
      return null;
    }
    if (!tvs[airingSeries.ids[1]]) {
      return null;
    }
    if (!tvs[airingSeries.ids[0]]) {
      return null;
    }
    const airingTeevees = airingSeries
      .ids
      .map(id => {
        return tvs[id]
      })
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h2>In Theaters</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <tvsticker
              movie={airingTeevees[1]}
              imagePath={IMAGE_SMALL_PATH}
              cast={cast[airingTeevees[1].id]}/>
            <tvsticker
              movie={airingTeevees[2]}
              imagePath={IMAGE_SMALL_PATH}
              cast={cast[airingTeevees[2].id]}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <TVSticker
              tv={airingTeevees[0]}
              imagePath={IMAGE_PATH}
              cast={cast[airingTeevees[0].id]}/>
          </div>
        </div>
      </div>
    );
  };
  return tvList(airingSeries);
};

export default TVContent;
