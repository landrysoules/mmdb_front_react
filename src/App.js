import React, {Component} from 'react';
import './App.css';
import TopBar from './components/top_bar/TopBar';
import SearchResultsContainer from './components/search_results/SearchResultsContainer';

class App extends Component {

  // componentWillMount() {
  //   this.getMovies();
  // };

  render() {
    return (
      <div className="App container">
        <div className="col-lg-12">
          <div className="row">
            <TopBar/>
          </div>
            <SearchResultsContainer/>
        </div>
      </div>
    );
  }
}

export default App;
