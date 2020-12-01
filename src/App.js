import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/navBar/navBar.jsx";
import Game from "./components/game/game.jsx";
import Intro from "./components/intro/intro.jsx";
import About from "./components/about/about.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gamePages: ["intro", "game", "about"],
      page: "intro",
      game: "football"
    };
    this.handleSVGClick = this.handleSVGClick.bind(this)
  }

 handleSVGClick() {
    const index = Math.floor(Math.random()*3)
    this.setState((state)=>{
      return {page: this.state.gamePages[index]}
    
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <p>Placeholder</p>
        {
      (()=> {
        switch (this.state.page) {
          case "intro": return <Intro game={this.state.game}/>;
          case "game": return <Game />;
          case "about": return <About />;
          default: return null;
        }
      })()
     }
     <svg onClick={this.handleSVGClick} height="50" width="50"style={{backgroundColor: "red"}}></svg>
      </div>
    );
  }
} //class App

export default App;
