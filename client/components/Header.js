import React, { Component } from 'react';
import {connect} from 'react-redux';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router';
import * as Actions from '../actions/index';

import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

const styles = {
  title: {
    cursor: 'pointer',
  },
};

class LoggedIn extends Component {
  //fix the line below with Babel plugin for es6
  //static muiName = 'FlatButton';

  render(){
    return(
      <FlatButton
        label="Logout"
        onClick={this.props.handleSignout}
      />
    );
  }
}

const LoggedOut = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem
      primaryText="Login"
      containerElement={<Link to="/login" />}
    />
    <MenuItem
      primaryText="Sign Up"
      containerElement={<Link to="/signup" />}
    />
  </IconMenu>
);

LoggedOut.muiName = 'IconMenu';

class Header extends Component {

  handleSignout() {
    console.log('sign out called');
    this.props.signOutUser();
  }

  handleTouchTap(){

  }

  render(){
    return (
        <AppBar
          showMenuIconButton={false}
          title="Ding"
          iconElementRight={this.props.authenticated ? <LoggedIn handleSignout={this.handleSignout.bind(this)}/> : <LoggedOut />}
        />
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, Actions)(Header);
