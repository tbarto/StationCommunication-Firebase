import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import AppIndex from './components/appIndex';
import CompanyDashboard from './components/CompanyDashboard';
import TableView from './components/TableView';
import StationView from './components/StationView';
import Tables from './components/Tables';
import Duties from './components/Duties';
import Signup from './containers/Signup';
import Login from './containers/Login';
import RequireAuth from './containers/RequireAuth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={AppIndex} />
    <Route path="signup" component={Signup} />
    <Route path="login" component={Login} />
    <Route path ="/restaurant" component={RequireAuth(CompanyDashboard)} >
      <Route path="/tables" component={RequireAuth(Tables)} />
      <Route path="/duties" component={RequireAuth(Duties)} />
      <Route path="/table" component={RequireAuth(TableView)} />
      <Route path="/station" component={RequireAuth(StationView)} />
    </Route>
  </Route>
);
