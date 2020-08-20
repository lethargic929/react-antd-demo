import React, { Component } from "react";
import "./index.scss";
import { Flex,WingBlank } from 'antd-mobile';

function Carts () {
  return (
    <div className="news-item" >
        <div className="imgwrap">
          <img
            className="img"
            src='https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg'
            alt=""
          />
        </div>
        <div className="content" >
          <div className="title">最新资讯 </div>
          <div className="info">最新资讯</div>
          <Flex><span className='tag-h'>随时看房</span><span className='tag-l'>随时看房</span><span className='tag-g'>精装</span><span>随时看房</span></Flex>
          <div className='price'><span>2800</span>元/月</div>
        </div>
      </div>
  )
}
function Tabs() {
return (
  <div className='list-tabs'>
    11345
    <div className='carts'><WingBlank size="md">{Carts()}</WingBlank></div>
    </div>
)
}
export default class CityList extends Component {
  render() {
    return <div className='city-list'>
      <div className='list-header'>
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
      <Tabs />
      </div>;
  }
}
