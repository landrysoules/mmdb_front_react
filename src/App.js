import React, {Component} from 'react';
import 'whatwg-fetch';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  // updateMovies(movies){
  //   this.setState({movies: movies});
  // }

  componentWillMount() {
    axios.get('/api/movies').then(response => {
      this.setState({movies: response.data});
      // this.updateMovies(response.data)
    }).catch(error => {
      console.error('error : ' + error)
    })
  };
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        {/* <p className="App-intro">
          To get started, edit
          <code>src/App.js</code>
          and save to reload.
        </p> */}
        <table>
          <tbody>
          {this.state.movies.map(movie => {
            if(movie.name){
            return (
              <tr key={movie._id.$oid}>
                <td>{movie.name}</td>
                <td>{movie.year}</td>
              </tr>
            )
          }

          })}
        </tbody>
        </table>
      </div>
    );
  }
}

export default App;
