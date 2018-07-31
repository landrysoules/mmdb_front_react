import React from 'react';
import { Route } from 'react-router-dom';
import DiscoverContent from '../discover/DiscoverContent';
import HomeContent from '../home/HomeContent';
import MovieContainer from '../movie/MovieContainer';
import TVContainer from '../tv/TVContainer';
import PersonContainer from '../person/PersonContainer';
import Movies from '../movie/home/Movies';
import Tv from '../tv/home/Tv';
import People from '../person/Home/People';

const ContentPanel = () => (
	<div className="row">
		<div className="col-md-12">
			<Route path="/" exact component={HomeContent} />
			<Route path="/discover" component={DiscoverContent} />
			<Route path="/movies" component={Movies} />
			<Route path="/tvs" component={Tv} />
			<Route path="/people" component={People} />
			<Route path="/movie/:movieId" component={MovieContainer} />
			<Route path="/tv/:showId" component={TVContainer} />
			<Route path="/person/:id" component={PersonContainer} />
		</div>
	</div>
);

export default ContentPanel;
