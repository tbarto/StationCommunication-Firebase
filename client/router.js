import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import AppIndex from './components/AppIndex';
import CompanyDashboard from './components/CompanyDashboard';
import Dashboard from './components/Dashboard';
import TableView from './containers/TableView';
import StationView from './containers/StationView';
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
      <Route path="/dashboard" component={RequireAuth(Dashboard)} />
      <Route path="/tables" component={RequireAuth(Tables)} />
      <Route path="/duties" component={RequireAuth(Duties)} />
      <Route path="/station" component={RequireAuth(StationView)} />
      <Route path="/table" component={RequireAuth(TableView)} />
    </Route>
  </Route>
);
