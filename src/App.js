import React, {Component} from 'react';
import './App.css';
import TopBar from './top_bar/TopBar';
import SearchResults from './search_results/SearchResults';

class App extends Component {


  // componentWillMount() {
  //   this.getMovies();
  // };

  render() {
    return (
      <div className="App container-fluid">
        <div className="col-lg-3"/>
        <div className="col-lg-6">
          <TopBar/>
          <SearchResults/>
        </div>
        <div className="col-lg-3"/>
      </div>
    );
  }
}

export default App;
