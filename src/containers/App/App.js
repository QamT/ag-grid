import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AppWrapper from './styles';
import { GlobalStyle } from 'styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';
const HomePage = lazy(() => import('../HomePage'));
const AddPage = lazy(() => import('../AddPage'));

const app = () => (
  <AppWrapper>
    <Helmet>
      <meta name='description' content='ag-grid crud app' />
    </Helmet>
    <Router>
      <Header />
      <Suspense fallback={Loader}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/add" component={AddPage} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
    <GlobalStyle />
  </AppWrapper>
)

export default app;
