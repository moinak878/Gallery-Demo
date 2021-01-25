import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import FooterPage from '../components/Footer';
import Gallary from '../components/Gallary';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div className="main-content">
        <Switch>
          <Route component={HomePage} path="/" exact={true} />
          <Route component={Gallary} path="/gallery" />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
      <FooterPage/>
    </div>
  </BrowserRouter>
);

export default AppRouter;
