import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import TopBar from './TopBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }


  componentWillMount() {
    axios.get('/api/movies').then(response => {
      this.setState({movies: response.data});
    }).catch(error => {
      console.error('error : ' + error)
    })
  };
  render() {
    return (
      <div className="App container-fluid">
        <TopBar />

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
