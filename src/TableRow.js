import React, { Component } from 'react';
import { FaTrash } from "react-icons/fa";
import Axios from 'axios';

class TableRow extends Component {
    constructor(props) {
        super(props);
    }
    // onChange(){
    //     Axios.delete('http://localhost:5000/delete', _id).then((res) => console.log(res.data));
    // }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj._id}
          </td>
          <td>
            {this.props.obj.date}
          </td>
          <td>
            {this.props.obj.enrollment}
          </td>
          <td>
            {this.props.obj.student}
          </td>
          <td>
            {this.props.obj.egg}
          </td>
          <td>
            {this.props.obj.rate}
          </td>
          <td>
            {this.props.obj.amount}
          </td>
          <td>
            {this.props.obj.remarks}
          </td>
          <td>
          <btn className="btn btn-danger btn-sm" onClick={this.onChange}> <FaTrash /></btn>
          </td>
        </tr>
    );
  }
}

export default TableRow;