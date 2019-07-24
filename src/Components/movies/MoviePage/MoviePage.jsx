import React, { Component } from 'react';

import MovieGrid from '../MovieGrid/MovieGrid';
import SearchBar from '../SearchBar/SearchBar';

import styles from './MoviePage.module.css';

import movies from '../../../Sources/movies.json';

import filterMovies from './filterMovies';

export default class MoviePage extends Component {
  state = { userSearch: '' };

  onInputChange = e => {
    const inputText = e.target.value;

    this.setState({
      userSearch: inputText,
    });
  };

  render() {
    const { userSearch } = this.state;
    const filteredMovies = filterMovies(userSearch, movies);
    return (
      <div className={styles.container}>
        <SearchBar onChange={this.onInputChange} />
        {filteredMovies.length === 0 ? (
          <p>No matching results!</p>
        ) : (
          <MovieGrid movies={filteredMovies} />
        )}
      </div>
    );
  }
}
