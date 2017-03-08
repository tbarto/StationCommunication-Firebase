import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/company';
import {Link} from 'react-router';

//CSS modules
import IconButton from 'material-ui/IconButton';
import {List, ListItem} from 'material-ui/List';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import FlatButton from 'material-ui/FlatButton'

export default class TableItem extends Component {

  render() {
    const tid = this.props.id;
    const tname = this.props.table.name;
    
    return(
      <ListItem
        primaryText={<Link to={`/table?tid=${tid}&tname=${tname}`}>{tname}</Link>}
        rightIconButton={
          <IconButton
            onClick={this.props.handleClick.bind(this)}>
            <ActionDelete />
          </IconButton>}
      />
    );
  }
}
