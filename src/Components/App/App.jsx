import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import Nav from '../Nav/Nav';

import Loader from '../Loader/Loader';

import './App.css';

const AsyncHomePage = Loadable({
  loader: () =>
    import('../../pages/HomePage' /* webpackChunkName: "HomePage" */),
  loading: Loader,
});

const AsyncPetsPage = Loadable({
  loader: () =>
    import('../../pages/PetsPage' /* webpackChunkName: "PetsPage" */),
  loading: Loader,
});

const AsyncOnePetPage = Loadable({
  loader: () =>
    import('../../pages/OnePetPage' /* webpackChunkName: "OnePetPage" */),
  loading: Loader,
});

const AsyncAboutPage = Loadable({
  loader: () =>
    import('../../pages/AboutPage' /* webpackChunkName: "AboutPage" */),
  loading: Loader,
});

const App = () => {
  return (
    <div>
      <Nav></Nav>
      <Switch>
        <Route path="/pets" exact component={AsyncPetsPage} />
        <Route path="/pets/:petId" component={AsyncOnePetPage} />
        <Route path="/about" component={AsyncAboutPage} />
        <Route component={AsyncHomePage} />
      </Switch>
    </div>
  );
};

export default App;
