import { Link } from "react-router-dom";
import React, { Component } from "react";
import logo from "../../images/pokémon_logo.svg.png";
import styles from "./EnterPage.module.css";
export default class EnterPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles.center}>
          <img src={logo} alt="img" />
          <Link to="/home">
            <button className={styles.button}>Enter</button>
          </Link>
        </div>
        <div>
          <div></div>
        </div>
      </React.Fragment>
    );
  }
}
