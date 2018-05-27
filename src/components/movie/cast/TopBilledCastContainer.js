import React from 'react';
import TopBilledCast from './TopBilledCast';
import {connect} from 'react-redux';

class TopBilledCastContainer extends React.Component{

  render(){
    return <TopBilledCast cast={this.props.cast}/>
  }
}

const mapStateToProps = state => {
  return {movie: state.movie, cast: state.cast};
};

export default connect(mapStateToProps)(TopBilledCastContainer);
