import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
        <h2 className="logo">
          <Link to="/">Codprog</Link>
        </h2>
        <ul style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="courses">Courses</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
