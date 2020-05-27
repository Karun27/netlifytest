import React, { Component } from "react";
import Nav1 from "./Nav";
import "./App.css";
import { Form, FormGroup, Label, Input, ButtonToggle } from "reactstrap";
import Axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

class FormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enrollment: "",
      students: "",
      egg: "",
      rate: "",
      amount: "",
      remarks: "",
      date: new Date(),
      showing: false,
    };
    this.onChangeEnrollment = this.onChangeEnrollment.bind(this);
    this.onChangeStudents = this.onChangeStudents.bind(this);
    this.onChangeEgg = this.onChangeEgg.bind(this);
    this.onChangeRate = this.onChangeRate.bind(this);
    this.onChangeAmount = this.onChangeAmount.bind(this);
    this.onChangeRemarks = this.onChangeRemarks.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChangeEnrollment(e) {
    this.setState({
      enrollment: e.target.value,
    });
  }
  onChangeStudents(e) {
    this.setState({
      students: e.target.value,
    });
  }
  onChangeEgg(e) {
    this.setState({
      egg: e.target.value,
    });
  }
  onChangeRate(e) {
    this.setState({
      rate: e.target.value,
    });
  }
  onChangeAmount(e) {
    this.setState({
      amount: e.target.value,
    });
  }
  onChangeRemarks(e) {
    this.setState({
      remarks: e.target.value,
    });
  }
  onChange = (date) => this.setState({ date });
  onSubmit(e) {
    e.preventDefault();
    console.log(
      `enrollment is ${this.state.enrollment} and students is ${this.state.students}`
    );
    const serverport = {
      enrollment: this.state.enrollment,
      students: this.state.students,
      egg: this.state.egg,
      rate: this.state.rate,
      amount: this.state.amount,
      remarks: this.state.remarks,
      date: this.state.date,
    };
    Axios.post(
      "https://mealapi.cfapps.io/connections/new",
      serverport
    ).then((res) => console.log(res.data));
    this.setState({
      enrollment: "",
      students: "",
      egg: "",
      rate: "",
      amount: "",
      remarks: "",
      date: "",
    });
  }
  render() {
    return (
      <div>
        <Nav1 />
        {/* <div class="container"> */}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="row">
          <div className="col-md-1"></div>
          <div class="col-md-10">
            <form onSubmit={this.onSubmit}>
            <div className="row">
              <div className="col-md-6">
              <div className="form-group">
                <Calendar onChange={this.onChange} value={this.state.date} />
                </div>
              </div>
              <div className="col-md-6">
              <div className="form-group">
                <label>Enrollment </label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.enrollment}
                  onChange={this.onChangeEnrollment}
                />
              </div>
              <div className="form-group">
                <label>Students Attended</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.students}
                  onChange={this.onChangeStudents}
                />
              </div>
              <div className="form-group">
                <label>Students Taken Egg</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.egg}
                  onChange={this.onChangeEgg}
                />
              </div>
              <div className="form-group">
                <label>Rate</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.rate}
                  onChange={this.onChangeRate}
                />
              </div>
              <div className="form-group">
                <label>Amount</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.amount}
                  onChange={this.onChangeAmount}
                />
              </div>
              <div className="form-group">
                <label>Remarks</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.remarks}
                  onChange={this.onChangeRemarks}
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary"
                />
              </div>
              </div>
              </div> 
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default FormPage;
