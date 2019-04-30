import React, { Component } from "react";
import Comp1 from "./pages/comp1";
import Comp2 from "./pages/comp2";
import Comp3 from "./pages/comp3";

class List extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>List Info</h1>
        <div className="row">
          {/* <div className="col-sm-4">
            <Comp1 />
          </div>
          <div className="col-sm-4">
            <Comp2 />
          </div>
          <div className="col-sm-4">
            <Comp3 />
          </div> */}
        </div>
      </React.Fragment>
    );
  }
}

export default List;
