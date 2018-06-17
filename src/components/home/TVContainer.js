import {connect} from 'react-redux';
import TVContent from './TVContent';

const mapStateToProps = state => {

  return {airingTVs: state.tvAiring, tvs: state.tv, cast: state.cast};
};

const TVContainer = connect(mapStateToProps)(TVContent);

export default TVContainer;
