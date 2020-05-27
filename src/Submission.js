import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import Nav1 from './Nav';

export default class Submission extends Component {

  constructor(props) {
      super(props);
      this.state = {serverports: []};
    }
    componentDidMount(){
      axios.get('https://mealapi.cfapps.io/features')
      .then(response => {
        this.setState({ serverports: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
    }
    tabRow(){
        return this.state.serverports.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
    }

    render() {
      return (
          <div>
              <Nav1 />
          
        <div className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Date</td>
                  <td>Enrollment</td>
                  <td>Students</td>
                  <td>Egg</td>
                  <td>Rate</td>
                  <td>Amount</td>
                  <td>Remarks</td>
                </tr>
              </thead>
              <tbody>
                {this.tabRow()}
              </tbody>
            </table>
        </div>
        </div>
      );
    }
  }