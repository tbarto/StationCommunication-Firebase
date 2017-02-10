import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import AppIndex from './components/appIndex';
import CompanyAdmin from './components/company_admin';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={AppIndex} />
    <Route path="/:rid" component={CompanyAdmin} />
  </Route>
);
