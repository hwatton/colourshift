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
      colourArray: [
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(0,0,255)"
    ],
      colour: "rgb(255,0,0)",
      colourIndex: 0,
    };

    this.goHome = this.goHome.bind(this)
    this.handleSVGClick = this.handleSVGClick.bind(this)
  
  }

 handleSVGClick() {
    const index = Math.floor(Math.random()*3)
    this.setState((state)=>{
      return {page: this.state.gamePages[index]}
    
    })
  }

goHome() {
  /* ADD HOME LINK ACTION IN HERE,
  OR RE WRITE THE DIV THAT HOLDS IT WITH A HREF OR WHATEVER */
  console.log("Iwas clicked")
  return false
}

  

  render() {
    return (
      <div className="App">
        <Navbar clicker={this.goHome}/>
        {
      (()=> {
        switch (this.state.page) {
          case "intro": return <Intro 
          colour={this.state.colour}
          clicker={this.handleSVGClick}
          />;
          case "game": return <Game />;
          case "about": return <About />;
          default: return null;
        }
      })()
     }

      </div>
    );
  }
} //class App

export default App;
