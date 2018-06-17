import {combineReducers} from 'redux';
import tvAiring from './tvAiring';
import movieAiring from './movieAiring';
import movie from './movie';
import tv from './tv';
import cast from './cast';

const mmdbApp = combineReducers({tvAiring, movieAiring, movie, cast, tv});

export default mmdbApp;
