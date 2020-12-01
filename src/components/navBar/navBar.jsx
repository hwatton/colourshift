import React from "react";

/* NoTes:
Make the logo a svg that I can load in.
black back, overlaid cols text possibly */

function Navbar(props) {
  return (
    <div className="navBar">
      <div className="fixedDiv">
        <svg height="30" width="50"></svg>
      </div>
      <div className="dropdown">
        <span>menu</span>
        <div className="dropdown-content">
          <ul>
            <li>
              <a href="#level">choose level</a>
            </li>
            <li>
              <a href="#level">about</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
