import { combineReducers } from 'redux';
import tvAiring from './tvAiring';
import movieAiring from './movieAiring';
import movie from './movie';
import tv from './tv';
import cast from './cast';
import credits from './credits';
import people from './people';

const mmdbApp = combineReducers({ tvAiring, movieAiring, movie, cast, tv, credits, people });

export default mmdbApp;
