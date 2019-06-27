import React, { Component } from 'react';
import "./navigation.scss";
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul className="nav-main">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/posts-landing">Posts</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;