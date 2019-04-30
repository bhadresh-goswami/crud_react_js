import React, { Component } from "react";
import axios from "axios";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tech: "",
      grad: ""
    };
    //this function will manage the changes in fields
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeTech = this.onChangeTech.bind(this);
    this.onChangeGrad = this.onChangeGrad.bind(this);
    //save function binding
    this.submitChanges = this.submitChanges.bind(this);
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
    console.log(`${this.state.name}, ${this.state.tech}, ${this.state.grad}!`);
  }
  onChangeTech(e) {
    this.setState({
      tech: e.target.value
    });
    console.log(`${this.state.name}, ${this.state.tech}, ${this.state.grad}!`);
  }
  onChangeGrad(e) {
    this.setState({
      grad: e.target.value
    });
    console.log(`${this.state.name}, ${this.state.tech}, ${this.state.grad}!`);
  }
  submitChanges(e) {
    e.preventDefault();
    //console.log(`${this.state.name}, ${this.state.tech}, ${this.state.grad}!`);
    const obj = {
      name: this.state.name,
      tech: this.state.tech,
      grad: this.state.grad
    };
      
      
    axios.post("http://localhost:54094/api/infomasters", obj).then(res => console.log(res));
  }

  state = {};
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Add New Info</h3>
        <form onSubmit={this.submitChanges}>
          <div className="form-group">
            <label>Person Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Technology Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.tech}
              onChange={this.onChangeTech}
            />
          </div>
          <div className="form-group">
            <label>Grad: </label>
            <select
              className="form-control"
              value={this.state.grad}
              onChange={this.onChangeGrad}
            >
              <option value="-1">Select One</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Add Information"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Create;
