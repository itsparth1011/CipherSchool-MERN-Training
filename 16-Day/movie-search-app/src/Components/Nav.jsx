import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={`container ${styles.nav}`}>
      <h1 className="logo">
        <Link to="/">Movie Search Application</Link>
      </h1>
    </nav>
  );
}

export default Nav;
