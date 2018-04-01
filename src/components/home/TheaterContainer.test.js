import React, { Component } from 'react';
import { connect } from 'react-redux';
import TheaterContent from './TheaterContent';
import { airingTheater } from '../../actions/airing_theater';

class TheaterContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.displayAiringTheater();
  }
}

function mapDispatchToProps(dispatch) {
  return {
    displayAiringTheater: () => {
      dispatch(airingTheater());
    }
  };
}

function mapStateToProps(state) {
  return {
    airingMovies: state.airingMovies
  };
}
export default connect(mapStateToProps)(TheaterContent);
