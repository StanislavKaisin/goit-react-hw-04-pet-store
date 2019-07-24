import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Atricle from '../Components/Atricle';

import * as articlesApi from '../../../Services/router/index';

const getIdFromProps = props => props.match.params.articleId;

export default class ArticlePage extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  state = { article: null };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    articlesApi
      .fetchArticleById(id)
      .then(article => this.setState({ article }));
  }

  handleGoBack = () => {
    const { history, location } = this.props;
    // history.push('/articles');
    if (location.state) {
      return history.push(location.state.from);
    }
    history.push('/articles');
    console.log('this.props=', this.props);
  };

  render() {
    // console.log('this.props.match=', this.props.match);
    const { article } = this.state;
    // console.log('article =', article);
    return (
      <div>
        <h2>{JSON.stringify(this.props.location.state)}</h2>
        {article && <Atricle {...article} handleGoBack={this.handleGoBack} />}
      </div>
    );
  }
}
