import Basics from "./levels/basics.jsx"
import React, { Component } from "react"
import styles from "./game.css";




class Game extends Component{
constructor(props) {
    super(props)

    this.state= {
        gameLevel: 1,

    }
}
/* ig gameLevel > 5 the rednder a grid based game.
Make 5 levels without the grid.*/

    render() {
        return (
            <div>
                <div className="levelHolder">
                <h2 className="level">Level: {this.state.gameLevel}</h2>
                </div>
            <Basics/>
            </div>
        )
    }
    
}

export default Game