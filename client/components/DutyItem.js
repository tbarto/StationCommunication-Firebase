import React, { Component } from 'react';

//CSS modules
import IconButton from 'material-ui/IconButton';
import {List, ListItem} from 'material-ui/List';
import ActionDelete from 'material-ui/svg-icons/action/delete';

export default class DutyItem extends Component {

  render() {
    return(
      <ListItem
        primaryText={this.props.duty.name}
        rightIconButton={
          <IconButton
            onClick={this.props.handleClick.bind(this)}>
            <ActionDelete />
          </IconButton>}
      />
    );
  }
}
