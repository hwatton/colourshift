import React, { Component } from "react";
import * as D3 from "d3";
import styles from "./introStyles.css";

class Intro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colour: this.props.colour
    };

    this.loadingGraphics = this.loadingGraphics.bind(this);
  }

  componentDidMount() {
    this.loadingGraphics();
  }

  componentDidUpdate() {
    this.loadingGraphics();
  }

  handleClick = this.props.clicker;

  loadingGraphics() {
    const node = this.node;

    let ht = 500;
    let actHt = 300;
    let rgbData = ["rgb(255,50,50)", "rgb(50,255,50)", "rgb(50,50,255)"];

    let cymData = ["rgb(255,255,0)", "rgb(0,255,255)", "rgb(255,0,255)"];
    //
    let dataset = [];
    let cx = ht / 2;
    let cy = actHt / 2;
    let rad = (ht / 2) * 0.25;

    for (let i = 0; i < 3; i++) {
      let x = cx + rad * Math.cos((2 * Math.PI * i) / 3);
      let y = cy + rad * Math.sin((2 * Math.PI * i) / 3);

      dataset.push({ col: rgbData[i], cx: x, cy: y });
    }

    //
    console.log(dataset)

    D3.select(node).selectAll("circle").data(dataset).enter().append("circle");

    D3.select(node).selectAll("circle").data(rgbData).exit().remove();

    D3.select(node)
      .selectAll("circle")
      .data(dataset)
      .attr("class", "circleThing")
      .attr("fill", (d, i) => {
        return d.col;
      })
      .attr("cx", (d, i) => {
        return d.cx;
      })
      .attr("cy", (d, i) => {
        return d.cy;
      })
      .attr("r", 70);

    D3.select(node)
      .append("text")
      .attr("class", "svgText")
      .attr("transform", "translate(" + ht / 2 + ", " + 320 / 2 + ")")
      .text("colourShift.");

    let counter = 0;

    function titleColourChange() {
      setTimeout(() => {
        if (counter >= 2) {
          counter = 0;
        } else {
          counter = counter + 1;
        }
        console.log(counter);
        D3.select(".svgText")
          .transition()
          .duration(2100)
          .style("fill", () => {
            return cymData[counter];
          });

        requestAnimationFrame(titleColourChange);
      }, 3000);
    }

    D3.select(".svgText")
      .transition()
      .duration(2500)
      .style("fill", () => {
        return cymData[1];
      })
      .on("end", () => {
        titleColourChange();
      });
  }

  render() {
    return (
      <div className="svgHolder">
        <svg
          ref={(node) => (this.node = node)}
          onClick={this.handleClick}
          id="svgAnimation"
          viewBox="0 0 500 300"
          preserveAspectRatio="xMinYMin meet"
        ></svg>
        <br/>
        <h2 className="click-play">click to play >>></h2>
      </div>
    );
  }
}
export default Intro;
