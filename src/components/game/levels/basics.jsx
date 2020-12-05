import React, {Component} from "react"
import * as D3 from "d3";
import styles from "./basics.css";

class Basics extends Component {
    constructor(props) {
      super(props);
  
      
  
      this.level_one = this.level_one.bind(this);
    }

componentDidMount() {
    this.level_one();
  }

  componentDidUpdate() {
    this.level_one();
  }

  level_one() {
      //d3 stuff
      const node = this.node

      let svgC = D3.select(node)
      let tx =350
      let ty = 250
      let tr = 35
    
let movingGroup = svgC.append("g")
      let circleGroup = svgC.append("g")

      let cenCir = [{x: tx, y: ty, r: tr, id: "centreCircle"}]

      movingGroup.selectAll("circle")
      .data(cenCir)
      .enter()
      .append("circle")
      .attr("id", (d)=>{return d.id})
      .attr("cx", (d)=>{return d.x})
      .attr("cy", (d)=>{return d.y})
      .attr("r", (d)=>{return d.r})
      .attr("fill", "rgb(0,0,255)")


      let cDat = [{x: 150, y: 250, r: 35, id: "mover"}]

     
      let diffY, diffX
      const drag_handler = D3.drag()
      .on("start", function(d, event){
        let thisX = D3.select(this).attr("cx")
        let thisY = D3.select(this).attr("cy")
        diffY = event.y - thisY
        diffX = event.x - thisX

      })
      .on("drag", function(event,d){
        D3.select(this)
        .attr("cx", d.x = (event.x - diffX))
        .attr("cy", d.y = (event.y - diffY))
      })
      .on("end", function(event, d){
let cX = D3.select(this).attr("cx")
let cY = D3.select(this).attr("cy")

if (cX > (tx - tr) && cX < (tx + tr)){
  //partytime
  if (cY > (ty - tr) && cY < (ty + tr)){
    //double party

    D3.select("#centreCircle")
      .transition()
      .duration(500)
      .attr("fill", "rgb(255,0,255)")

    D3.select(this).transition()
    .duration(600)
    .ease(D3.easeBounce)
    .attr("cx", tx)
    .attr("cy", ty)
    .on("end",()=>{
      D3.select(this).remove()
      
    })
    
  }
}


      })

      let circles = circleGroup.selectAll("circle")
      .data(cDat)
      .enter()

     circles
      .append("circle")
      .attr("id", (d)=>{return d.id})
      .attr("cx", (d)=>{return d.x})
      .attr("cy", (d)=>{return d.y})
      .attr("r", (d)=>{return d.r})
      .attr("fill", "rgb(255,0,0)")
      .call(drag_handler)
      

      

    

  }

  render() {
    return (
      <div className="svgHolder">
        <div className="instructionHolder">
          <h4 className="instruction">Turn the blue circle magenta</h4>
        </div>
        <svg
          ref={(node) => (this.node = node)}
          onClick={this.handleClick}
          id="svgAnimation"
          height="500"
          width="500"
          viewBox="0 0 500 500"
          preserveAspectRatio="xMinYMin meet"
        ></svg>

      
      </div>
    );
  }
}

export default Basics