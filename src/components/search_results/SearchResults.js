import React, {Component} from 'react';
import axios from 'axios';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  getMovies() {
    axios.get('/api/movies').then(response => {
      this.setState({movies: response.data});
    }).catch(error => {
      console.error('error : ' + error)
    })
  }
  render() {
    return (
          <table>
            <tbody>
              {this.state.movies.map(movie => {
                if (movie.name) {
                  return (
                    <tr key={movie._id.$oid}>
                      <td>{movie.name}</td>
                      <td>{movie.year}</td>
                    </tr>
                  )
                }
                return ''
              })}
            </tbody>
          </table>
    );
  }
}

export default SearchResults;
