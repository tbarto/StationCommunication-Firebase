import React from 'react';
import {Route, RouteIndex} from 'react-router';

import App from './components/app';
import TableBuzzer from './components/table-buzzer';

export default (
  <Route path="/" component={App}>
    <Route path="table/enter" component={TableBuzzer} />
  </Route>
);
