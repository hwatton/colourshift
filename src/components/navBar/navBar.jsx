import React from "react";
import styles from "./navBar.css";
import { ReactComponent as Logo } from './logoOptimised.svg'

/* NoTes:
Make the logo a svg that I can load in.
black back, overlaid cols text possibly */

function Navbar(props) {
  return (
    <div className="navBar">
      <div className="logo-bit" onClick={props.clicker}>
      <Logo />
     
      </div>
      
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
