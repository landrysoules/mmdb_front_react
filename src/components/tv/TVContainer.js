import React, {Component} from 'react';
import {connect} from 'react-redux';
import TV from './TV';
import {getTv} from '../../actions/tv';
import {getCast} from '../../actions/cast';

class TVContainer extends Component {

  componentDidMount() {
    this
      .props
      .getTv(this.props.match.params.tvId);
    this
      .props
      .getCast(this.props.match.params.tvId);
  }

  render() {
    return (this.props.movie && this.props.cast)
      ? <TV tv={this.props.tv} cast={this.props.cast}/>
      : null;
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    tv: state.tv[ownProps.match.params.tvId],
    cast: state.cast[ownProps.match.params.tvId]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getTv: tvId => {
      dispatch(getTv(tvId));
    },
    getCast: tvId => {
      dispatch(getCast(tvId))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TVContainer);
