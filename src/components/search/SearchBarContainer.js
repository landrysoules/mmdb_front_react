import { connect } from 'react-redux';
import { movie } from '../../actions/movie';
import { tv } from '../../actions/tv';
import SearchBar from './SearchBar';

const mapDispatchToProps = (dispatch) => {
	return {
		displayMovie: (movieId) => {
			dispatch(movie(movieId));
		},
		displayTV: (showId) => {
			dispatch(tv(showId));
		}
	};
};

const SearchBarContainer = connect(null, mapDispatchToProps)(SearchBar);

export default SearchBarContainer;
