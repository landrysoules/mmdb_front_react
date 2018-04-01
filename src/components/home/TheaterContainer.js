import { connect } from 'react-redux';
import TheaterContent from './TheaterContent';
import { airingTheater } from '../../actions/airing_theater';
import { getMainAiringMovies } from '../../selectors';

const mapStateToProps = state => {
  return {
    // airingMovies: state.airingMovies
    // Here we use reselect to get a sublist of the 3 first movies, instead of the whole list returned by the API call
    airingMovies: getMainAiringMovies(state)
  };
};

const TheaterContainer = connect(mapStateToProps)(TheaterContent);

export default TheaterContainer;
