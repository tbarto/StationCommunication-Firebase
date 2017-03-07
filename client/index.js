import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, browserHistory} from 'react-router';
import reduxThunk from 'redux-thunk';
import * as Actions from './actions/index';
import routes from './router';
import reducers from './reducers';

//CSS modules
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red400} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';

//material-ui helper for touch screen clicks
injectTapEventPlugin();

//override default material-ui CSS theme
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: red400,
  },
  appBar: {
    height: 50,
  },
});

const createStoreWithMiddleware = applyMiddleware(
  reduxThunk
)(createStore);

const store = createStoreWithMiddleware(reducers);

//dispatch verifyAuth when first loading in case logged in user refreshes page
store.dispatch(Actions.verifyAuth());

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
  </MuiThemeProvider>
  , document.querySelector('.container'));
