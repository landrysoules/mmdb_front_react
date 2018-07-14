import React from 'react';
import { ClipLoader } from 'react-spinners';
import './Movie.css';
import Style from 'style-it';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import TopBilledCastContainer from '../cast/TopBilledCastContainer';
import CrewContainer from '../crew/CrewContainer';
import { MOVIE_CAST_TYPE } from '../../constants/global';

const Movie = ({ movie, cast }) => {
	return (
		<div>
			<Style>
				{` div.header.large.first:before {
              content: '';
              position: absolute;
              left: 0;
              right: 0;
              width: 100%;
              height: 97%;
              z-index: -1;
              display: block;
              filter: opacity(0) grayscale(100%) contrast(130%);
              background-size: cover;
              background-repeat: no-repeat;
              background-position: 50% 50%;
              background-image: url("https://image.tmdb.org/t/p/w1400_and_h450_face${movie.backdrop_path}");
              will-change: opacity;
              transition: filter 1s;
            }
            div.header.large.first.lazyloaded:before {
              filter: opacity(100) grayscale(100%) contrast(130%);
            }
             `}
				<div className="row">
					<div className="col-md-12 full-width">
						<div className="header large first lazyloaded custom_bg">
							<div className="row">
								<div className="col-md-2" />
								<div className="col-md-2 poster">
									<img
										src={'https://image.tmdb.org/t/p/w300_and_h450_bestv2' + movie.poster_path}
										alt={movie.title}
									/>
								</div>
								<div className="col-md-4 movie-block">
									<h2> {movie.title}</h2>
									<div className="percent-circle">
										<span>
											<CircularProgressbar
												percentage={movie.vote_average * 10}
												strokeWidth="10"
												initialAnimation="true"
											/>
										</span>
									</div>
									<h3> Overview</h3> <div> {movie.overview}</div>
									<CrewContainer id={movie.id} type={MOVIE_CAST_TYPE} />
								</div>
								<div className="col-md-4" />
							</div>
						</div>
					</div>
				</div>
			</Style>
			<div className="row">
				<div className="col-md-2" />
				<div className="col-md-8">
					<div className="row">
						<TopBilledCastContainer id={movie.id} type={MOVIE_CAST_TYPE} />
					</div>
				</div>
				<div className="col-md-2" />
			</div>
		</div>
	);
};

export default Movie;
