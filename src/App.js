import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/navBar/navBar.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      game: false,
      intro: true,
      about: false
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <p>Placeholder</p>
      </div>
    );
  }
} //class App

export default App;
