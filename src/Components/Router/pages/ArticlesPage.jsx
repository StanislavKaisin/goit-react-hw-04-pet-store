import React, { Component, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import Loadable from 'react-loadable';
import { Route } from 'react-router-dom';
import Loader from '../Components/Loader/Loader';

// import { getEnabledCategories } from 'trace_events';

import * as articlesApi from '../../../Services/router/index';

import AtriclesList from '../Components/AtriclesList';
import CategorySelector from '../../CategorySelector/CategorySelector';

// import ArticlePage from './ArticlePage';

// const AsyncArticlePage = lazy(() => {
//   import('./ArticlePage' /* webpackChunkName: "ArticlePage" */);
// });

const AsyncArticlePage = Loadable({
  loader: () => import('./ArticlePage' /* webpackChunkName: "ArticlePage" */),
  loading: Loader,
});

const options = [
  { value: 'health', label: 'health' },
  { value: 'technology', label: 'technology' },
  { value: 'sports', label: 'sports' },
];

const getCategoryByValue = (categories, value) => {
  return categories.find(category => category.value === value);
};

const getCategoryFromLocation = location => {
  return queryString.parse(location.search).category;
};

export default class ArticlesPage extends Component {
  // static propTypes = {
  //   prop: PropTypes,
  // };

  state = {
    items: [],
  };

  componentDidMount() {
    // articlesApi.fetchAllArticles().then(items => this.setState({ items }));
    const category = getCategoryFromLocation(this.props.location);
    console.log('category=', category);
    console.log('module=', module);
    let categoryForSearch;
    category ? (categoryForSearch = category) : (categoryForSearch = 'all');
    articlesApi
      .fetchArticlesByCategory(categoryForSearch)
      .then(items => this.setState({ items }));
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('prevProps=', prevProps);
    // console.log('this.props=', this.props);
    const prevCategory = getCategoryFromLocation(prevProps.location);
    const nextCategory = getCategoryFromLocation(this.props.location);

    // console.log('prevCategory=', prevCategory);
    // console.log('nextCategory=', nextCategory);

    if (nextCategory !== prevCategory) {
      let categoryForSearch;
      nextCategory
        ? (categoryForSearch = nextCategory)
        : (categoryForSearch = 'all');
      articlesApi
        .fetchArticlesByCategory(categoryForSearch)
        .then(items => this.setState({ items }));
    }
  }

  handleCategoryChange = option => {
    // console.log('option=', option);
    if (option) {
      return this.props.history.push({
        ...this.props.location,
        search: `category=${option.value}`,
      });
    }
    this.props.history.push({
      ...this.props.location,
      search: ``,
    });
  };

  render() {
    const { items } = this.state;
    const { location } = this.props;
    const qsCategory = getCategoryFromLocation(location);
    const selectedCategory = getCategoryByValue(options, qsCategory);
    const { path } = this.props.match;
    console.log('selectedCategory =', selectedCategory);
    // console.log('qsCategory =', qsCategory);
    // console.log('this.props.location=', this.props.location);
    // console.log(
    //   'queryString.parse(this.props.location.search)=',
    //   queryString.parse(this.props.location.search),
    // );
    return (
      <div>
        {/* <Suspense fallback={<h1> Loading ...</h1>}> */}
        <h1>ArticlesPage</h1>
        <CategorySelector
          options={options}
          isClearable
          value={selectedCategory}
          onChange={this.handleCategoryChange}
        />
        <AtriclesList items={items} />
        <Route path={`${path}/:articleId`} component={AsyncArticlePage} />
        {/* </Suspense> */}
      </div>
    );
  }
}
