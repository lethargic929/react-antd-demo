import React, { Component } from "react";
import { SearchBar } from "antd-mobile";
import "./index.scss";
import axios from "axios";
export default class SearchHead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curCityName: "上海",
    };
  }
  componentDidMount() {
    // 获取当前城市
    const curCity = new window.BMap.LocalCity();
    // console.log(curCity, 123);
    curCity.get(async (res) => {
      const data = await axios.get(
        `http://localhost:8080/area/info?name=${res.name}`
      );
      // console.log(data, 9898);
      this.setState({
        curCityName: data.data.body.label,
      });
    });
  }

  render() {
    return (
      <div className="search">
        <div className="single-menu-active">
          <div
            onClick={() => this.props.history.push("/citylist")}
            className="single-top-nav-bar"
          >
            <span>{this.state.curCityName}</span>
            <i slot="icon" className="iconfont icon-arrow back"></i>
          </div>
        </div>
        <SearchBar
          placeholder="请输入小区或地址"
          onFocus={() => this.props.history.push("/search")}
        />
        <i
          className="iconfont icon-map"
          onClick={() => this.props.history.push("/map")}
        ></i>
      </div>
    );
  }
}
