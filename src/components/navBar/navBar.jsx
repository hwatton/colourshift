import React from "react";
import styles from "./navBar.css";
/* NoTes:
Make the logo a svg that I can load in.
black back, overlaid cols text possibly */

function Navbar(props) {
  return (
    <div className="navBar">
      <div className="dropdown">
        <button className="dropdown-button">menu</button>
        <div className="dropdown-content">
          <a href="#level">choose level</a>
          <a href="#level">about</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
