import React, { Component } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import BookList from '../BookList/BookList';
import Spinner from '../Spinner/Spinner';
import ErrorNotification from '../ErrorNotification/ErrorNotification';

import * as api from '../../../Services/api';
import specifyBook from '../../../Services/specifyBook';

import genres from '../../../Sources/genres.json';

import styles from './BookSearch.module.css';

const INITIALSTATE = {
  categoryForSearch: '',
  query: '',
};

export default class BookSearch extends Component {
  static propTypes = {};

  state = {
    searchResults: [],
    isLoading: false,
    error: null,
    ...INITIALSTATE,
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isLoading: true });
    const { categoryForSearch, query } = this.state;
    api
      .get(query, categoryForSearch)
      .then(data => {
        return this.setState({
          searchResults: specifyBook(data.items),
        });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
    this.reset();
  };

  reset = () => {
    return this.setState({
      ...INITIALSTATE,
    });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      searchResults,
      categoryForSearch,
      query,
      isLoading,
      error,
    } = this.state;
    return (
      <div className={styles.container}>
        <SearchForm
          onSubmit={this.handleSubmit}
          value={query}
          onChange={this.handleChange}
          categories={genres}
          onCategoryChange={this.handleChange}
          categoryForSearch={categoryForSearch}
        />
        {error && <ErrorNotification text={error.message} />}
        {isLoading ? (
          <Spinner />
        ) : (
          <BookList searchResults={searchResults}></BookList>
        )}
      </div>
    );
  }
}
