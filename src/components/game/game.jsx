import Basics from "./levels/basics.jsx";
import LevelTwo from "./levels/level2.jsx";
import React, { Component } from "react";
import styles from "./game.css";

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameLevel: 0
    };

    this.changeLevel = this.changeLevel.bind(this);
  }
  /* ig gameLevel > 5 the rednder a grid based game.
Make 5 levels without the grid.*/

  changeLevel() {
    console.log("clicked");
    const index = Math.floor(Math.random() * 2);
    this.setState((state) => {
      return { gameLevel: 1 };
    });
  }
  render() {
    let gameArray = [<Basics />, <LevelTwo />];
    return (
      <div>
        <div className="levelHolder">
          <h2 className="level">Level: {this.state.gameLevel + 1}</h2>
          <button onClick={this.changeLevel}>Next Level</button>
        </div>
        <Basics />
      </div>
    );
  }
}

export default Game;
