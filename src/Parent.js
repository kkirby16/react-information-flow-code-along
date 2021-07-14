import React, { Component } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

class Parent extends Component {
  constructor() {
    super();
    this.state = {
      color: getRandomColor(),
      childrenColor: "#FFF", //why do we need this line here?
    };
  }

  changeColor = (newChildColor) => {
    this.setState({
      color: getRandomColor(), //component is rerendered when own state or props change. does whole component component get recalled or just the render part of the component get rerendered?
      childrenColor: newChildColor,
    });
  };

  render() {
    return (
      <div className="parent" style={{ backgroundColor: this.state.color }}>
        <Child
          color={this.state.childrenColor}
          handleColorChange={this.changeColor}
        />
        <Child
          color={this.state.childrenColor}
          handleColorChange={this.changeColor}
        />
      </div>
    );
  }
}

export default Parent;
