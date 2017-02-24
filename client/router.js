import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import AppIndex from './components/appIndex';
import CompanyDashboard from './components/CompanyDashboard';
import TableView from './components/TableView';
import StationView from './components/StationView';
import Tables from './components/Tables';
import Duties from './components/Duties';

import CompanyDashboard2 from './components/CompanyDashboard2';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={AppIndex} />
    <Route path ="/restaurant" component={CompanyDashboard2} >
      <Route path="/tables" component={Tables} />
      <Route path="/duties" component={Duties} />
      <Route path="/table" component={TableView} />
      <Route path="/station" component={StationView} />
    </Route>
  </Route>
);

//<Route path="/:rid" component={CompanyAdmin} />
