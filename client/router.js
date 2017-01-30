import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import AppIndex from './components/appIndex';
import TableBuzzer from './components/table';
import Station from './components/station';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={AppIndex} />
    <Route path="table/:id" component={TableBuzzer} />
    <Route path="station" component={Station} />
  </Route>
);
