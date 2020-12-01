import React, {Component} from "react"
import * as D3 from "d3";

class Intro extends Component {

    constructor(props) {
        super(props);

        this.state = {
            game : this.props.game
          }

          this.loadingGraphics = this.loadingGraphics.bind(this)
    }

    componentDidMount() {
        this.loadingGraphics();
      }
    
      componentDidUpdate() {
        this.loadingGraphics();
      }

    loadingGraphics() {
        const node = this.node;

        let ht = 500;

        let rgbData = [
            "rgb(255,0,0)",
            "rgb(0,255,0)",
            "rgb(0,0,255)",
        ]

        D3.select(node)
      .selectAll("circle")
      .data(rgbData)
      .enter()
      .append("circle");

    D3.select(node).selectAll("circle").data(rgbData).exit().remove();

    D3.select(node)
      .selectAll("circle")
      .data(rgbData)
      .attr("fill", (d, i) => {
        return d;
      })
      .attr("cx", () => {
        return 0.1 * ht + 0.8 * Math.random() * ht;
      })
      .attr("cy", () => {
        return Math.random() * 100;
      })
      .attr("r", 50);

    }


    render () {
    return (
        <svg ref={(node) => (this.node = node)} viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet"></svg>
    )
}
}
export default Intro