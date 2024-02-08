import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h2 className="logo">
        <Link to="/">Todo</Link>
      </h2>
      <ul>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="completed">Completed</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
