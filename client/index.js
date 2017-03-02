import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, browserHistory} from 'react-router';
import reduxThunk from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import * as Actions from './actions/index';

import routes from './router';
import reducers from './reducers';

//material-ui helper for touch screen clicks
injectTapEventPlugin();

const createStoreWithMiddleware = applyMiddleware(
  reduxThunk
)(createStore);

const store = createStoreWithMiddleware(reducers);

store.dispatch(Actions.verifyAuth());

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
  </MuiThemeProvider>
  , document.querySelector('.container'));
