import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import AppIndex from './components/appIndex';
import CompanyAdmin from './components/company_admin';
import TableView from './components/table_view';
import Station from './components/station';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={AppIndex} />
    <Route path ="/restaurant" component={CompanyAdmin} />
    <Route path="/:rid/:tid" component={TableView} />
    <Route path="/station" component={Station} />
  </Route>
);

//<Route path="/:rid" component={CompanyAdmin} />
