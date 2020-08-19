import React, { Component } from "react";
import "./index.scss";
export default class Map extends Component {
  componentDidMount() {
    const map = new window.BMap.Map("container");
    const point = new window.BMap.Point(116.404, 39.915);
    map.centerAndZoom(point, 15);
  }
  render() {
    return (
      <div className="citylist">
        <div id="container"></div>
      </div>
    );
  }
}
