import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div>
      <ul className={styles.center}>
        <li className={styles.color}>
          <Link to={"/home"}>HOME</Link>
        </li>
        <li className={styles.color}>
          <Link to={"/create"}>CREATE</Link>
        </li>
        <li className={styles.color}>
          <Link to={"/"}>BACK</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
