//import React from "react";
import { Link } from "react-router-dom";

import React, { Component } from "react";
import img from "../pokemon.png";

export default class EnterPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div>Welcome to my Poke Page</div>
        <img src={img} alt="img" />
        <br />
        <Link to="/home">
          <button>Enter</button>
        </Link>
      </React.Fragment>
    );
  }
}
