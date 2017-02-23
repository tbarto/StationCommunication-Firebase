import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router';

const styles = {
  title: {
    cursor: 'pointer',
  },
};

class Header extends Component {

  handleTouchTap(){

  }

  render(){
    return (
      <div>
        <AppBar
          showMenuIconButton={false}
          title="Station Communication"
        />
      </div>
    );
  }
}

export default Header;
