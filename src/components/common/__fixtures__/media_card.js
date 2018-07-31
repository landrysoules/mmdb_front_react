import React from 'react';
import MediaCard from '../cards/MediaCard';
import 'bootstrap/dist/css/bootstrap.css';

const dummyFunc = (id) => {
	console.debug(id);
};

const movie = {
	id: 2,
	posterPath: 'rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg',
	title: 'Thor: Ragnarok',
	release_date: '2018-07-13',
	overview:
		'Thor is on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the prophecy of destruction to his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.',
	vote_average: 5.7
};

export default {
	component: MediaCard,
	props: {
		details: dummyFunc,
		movie: movie
	}
};
