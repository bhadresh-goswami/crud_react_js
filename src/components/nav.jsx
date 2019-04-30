import React, { Component } from "react";

import { Link } from "react-router-dom";

class Nav extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <Link className="navbar-brand" to={"/"}>
          CRUD
        </Link>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to={"/index"}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/create"}>
              Create
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/github"}>
              View Code
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
