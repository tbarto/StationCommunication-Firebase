import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/company';
import {Link} from 'react-router';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';

class TableItem extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.deleteTable(this.props.id, this.props.rid);
  }

  render() {
    const rid = this.props.rid;
    const tid = this.props.id;

    return (
      <TableRow>
        <TableRowColumn><Link to={`/table?tid=${tid}&tname=${this.props.table.name}`}>{this.props.table.name}</Link></TableRowColumn>
        <TableRowColumn>
          <IconButton
            onClick={this.handleClick}>
            <i className="material-icons" >delete</i>
            </IconButton>
        </TableRowColumn>
      </TableRow>
    );
  }
}

export default connect(null, actions)(TableItem);
