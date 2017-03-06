import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/company';
import {Link} from 'react-router';

//CSS modules 
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton'

class TableItem extends Component {

  render() {
    const tid = this.props.id;
    const tname = this.props.table.name;

    return (
      <TableRow>
        <TableRowColumn>
          <FlatButton
            label={this.props.table.name}
            containerElement={<Link to={`/table?tid=${tid}&tname=${tname}`}>{tname}</Link>}
          />
        </TableRowColumn>
        <TableRowColumn>
          <IconButton
            onClick={this.props.handleClick.bind(this)}>
            <i className="material-icons" >delete</i>
            </IconButton>
        </TableRowColumn>
      </TableRow>
    );
  }
}

export default TableItem;
