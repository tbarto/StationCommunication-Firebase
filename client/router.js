import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import AppIndex from './components/appIndex';
import CompanyDashboard from './components/CompanyDashboard';
import TableView from './components/TableView';
import StationView from './components/StationView';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={AppIndex} />
    <Route path ="/restaurant" component={CompanyDashboard} />
    <Route path="/table" component={TableView} />
    <Route path="/station" component={StationView} />
  </Route>
);

//<Route path="/:rid" component={CompanyAdmin} />
