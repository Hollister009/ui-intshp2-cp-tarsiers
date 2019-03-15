import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home';
import Page404 from '../pages/page404';
import ProductListPage from '../pages/PLP';
import ProductDetailsPage from '../pages/PDP';

const RouteSchema = () => (
  <main className="main">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/products" component={ProductListPage} />
      <Route path="/products/:productId" component={ProductDetailsPage} />
      <Route exact path="*" render={() => <Page404 />} />
    </Switch>
  </main>
);

export default RouteSchema;
