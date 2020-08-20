import React, { Component } from "react";
import { Flex } from 'antd-mobile';
import "./index.scss";
import {getCurCity} from '../../utils/index'
export default class SearchHead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curCityName: "上海",
    };
  }
  componentDidMount() {
    // 获取当前城市
    // const curCity = new window.BMap.LocalCity();
    // // console.log(curCity, 123);
    // curCity.get(async (res) => {
    //   const data = await axios.get(
    //     `http://localhost:8080/area/info?name=${res.name}`
    //   );
    //   // console.log(data, 9898);
    //   this.setState({
    //     curCityName: data.data.body.label,
    //   });
    // });
    getCurCity().then(res=>{
      this.setState({
            curCityName: res.label,
          });
    })
  }

  render() {
    return (
      <div >
      <Flex className='search-box'>
      <Flex className="search">
        <div className="location" onClick={() => this.props.history.push('/citylist')}>
        <span>上海</span>
        <i className="iconfont icon-arrow"></i>
        </div>
        <div className="form" onClick={() => this.props.history.push('/search')}>
        <i className="iconfont icon-seach" />
          <span className="text">请输入小区或地址</span>
        </div>
      </Flex>
      <i className="iconfont icon-map" onClick={() => this.props.history.push('/map')}></i>
      </Flex>
      </div>
    );
  }
}
