import { connect } from 'react-redux';
import TVContent from './TVContent';
import { renderComponent } from 'recompose';

render(){

}

const mapStateToProps = state => {
  return { airingTVs: state.tvAiring, tvs: state.tv, cast: state.cast };
};
const TVContainer = connect(mapStateToProps)(TVContainer);

export default TVContainer;
