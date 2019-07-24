/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import * as api from '../../../Services/api';

import SearchPage from '../SearchPage/SearchPage';
import FilmPage from '../FilmPage/FilmPage';
import FavoritesPage from '../FavoritesPage/FavoritesPage';

import specifyMovie from '../../../Services/specifyMovie';

// const PAGES = ['search', 'film page', 'favorites'];

export default class Filmoteka extends Component {
  // static propTypes = {
  //   prop: PropTypes,
  // };

  state = {
    currentPage: 'search',
    query: '',
    searchResults: [],
    isLoading: false,
    currentMovieID: '',
  };

  handleChangeCurrentPage = e => {
    // console.log(e.target.name);
    const { name } = e.target;
    this.setState({
      currentPage: name,
    });
  };

  handleInputChange = e => {
    const { value } = e.target;
    this.setState({
      query: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    this.setState({ isLoading: true });
    api
      .get(query)
      .then(data => {
        return this.setState({
          searchResults: specifyMovie(data.Search),
        });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
    this.reset();
  };

  handleMovieClick = e => {
    e.preventDefault();
    // console.log(e.target);
    // console.log(e.target.id);
    const { id } = e.target;
    this.setState({
      currentPage: 'film page',
      currentMovieID: id,
    });
  };

  reset = () => {
    this.setState({ query: '' });
  };

  render() {
    const { currentPage, query, searchResults, currentMovieID } = this.state;
    // console.log('this.state=', this.state);
    // console.log('searchResults=', searchResults);
    return (
      <div>
        <p>Filomoteka component</p>
        <button
          type="button"
          name="search"
          onClick={this.handleChangeCurrentPage}
        >
          search page
        </button>
        {/* <button
          type="button"
          name="film page"
          onClick={this.handleChangeCurrentPage}
        >
          film page
        </button> */}
        <button
          type="button"
          name="favorites"
          onClick={this.handleChangeCurrentPage}
        >
          favorites page
        </button>
        {currentPage === 'film page' ? (
          <FilmPage currentMovieID={currentMovieID} />
        ) : currentPage === 'search' ? (
          <SearchPage
            query={query}
            onChange={this.handleInputChange}
            onSubmit={this.handleSubmit}
            searchResults={searchResults}
            onMovieClick={this.handleMovieClick}
          />
        ) : (
          <FavoritesPage />
        )}
        {/* <SearchPage />
        <FilmPage />
        <FavoritesPage /> */}
      </div>
    );
  }
}

// {switch (true) {
//     case (currentPage==='search'):
//       return <SearchPage />;
//     case (currentPage==='film page'):
//       return <FilmPage />
//       case (currentPage==='favorites'):
//         return  <FavoritesPage />
//     default:
//       return <SearchPage />;
//   }
// }
// {(function() {
//   switch (true) {
//     case currentPage === 'search':
//       return (
//         <SearchPage query={query} onChange={this.handleInputChange} />
//       );
//     case currentPage === 'film page':
//       return <FilmPage />;
//     case currentPage === 'favorites':
//       return <FavoritesPage />;
//     default:
//       return <SearchPage />;
//   }
// })()}
