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
    this.goToGame = this.goToGame.bind(this)
  
  }

 handleSVGClick() {
    const index = Math.floor(Math.random()*3)
    this.setState((state)=>{
      return {page: this.state.gamePages[index]}
    
    })
  }

  goToGame() {

    this.setState((state)=>{
      return {page: "game"}
    
    })
  }

 

goHome() {

  const index = Math.floor(Math.random()*3)
    this.setState((state)=>{
      return {page: "intro"}
    
    })
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
          enableGame={this.goToGame}
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
