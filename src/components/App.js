import React, {Component} from 'react';
import './App.css';
import TopBarContainer from './top_bar/TopBarContainer';
import SearchResultsContainer from './search_results/SearchResultsContainer';

class App extends Component {


  // componentWillMount() {
  //   this.getMovies();
  // };

  render() {
    return (
      <div className="App container-fluid">
        <div className="col-lg-3"/>
        <div className="col-lg-6">
          <TopBarContainer/>
          <SearchResultsContainer/>
        </div>
        <div className="col-lg-3"/>
      </div>
    );
  }
}

export default App;
