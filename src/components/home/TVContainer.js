import { connect } from 'react-redux';
import TVContent from './TVContent';

const mapStateToProps = state => {
  return {
    airingSeries: state.airingSeries
    // Here we use reselect to get a sublist of the 3 first movies, instead of the whole list returned by the API call
    // airingMovies: getMainAiringMovies(state)
  };
};

const SeriesContainer = connect(mapStateToProps)(TVContent);

export default SeriesContainer;
