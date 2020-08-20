import React, { Component } from "react";
import { NavBar } from "antd-mobile";
import "./index.scss";
import axios from "axios";
import { getCurCity } from "../../utils/index";
import { List,AutoSizer } from "react-virtualized";
// const fromCityDate = (list) => {
//   const cityList = {};

//   list.forEach((item) => {
//     // 1. 先把每一项的城市首字母取出来
//     const first = item.short.substr(0, 1);
//     // 2. 判断每个item里是否有这个城市
//     if (cityList[first]) {
//       cityList[first].push(item);
//     } else {
//       // 3. 如若没有,我们需要先创建一个空数组
//       cityList[first] = [item];
//     }
//   });
//   // 4. 这里我们需要选出所有的key
//   const cityIndex = Object.keys(cityList).sort();
//   return {
//     cityList,
//     cityIndex,
//   };
// };
// const list = [
//   "Brian Vaughn"
// ];

// function rowRenderer({
//   key, // Unique key within array of rows
//   index, // 当前的索引
//   isScrolling, // 当前项是否正在滚动,是个布尔值
//   isVisible, // 当前项在List是可见的
//   style, // 必填, 若无会出现空白
// }) {
//   return (
//     <div key={key} style={style}>
//       {list[index]}  {index}
//     </div>
//   );
// }
const TITLE_height=36
const TEXT_height=50
const fromCityIndex = (letter) =>{
  switch (letter) {
    case "#":
      return '当前定位';
      case "hot":
      return '热门城市';
  
    default:
      return letter.toUpperCase()
  }
}
export default class HouseList extends Component {
  constructor () {
    super () 
    this.state = {
      cityList:{},
      cityIndex:[],
      curIndex:0
    }
  }
  // 这里需要设置单行的高度,动态计算每一行的高度
  getCurHeight = ({index}) =>{
    const {cityIndex,cityList} = this.state
    return TITLE_height+cityList[cityIndex[index]].length*TEXT_height
  }
  // 右边的字母渲染
  renderIndex = () =>{
    // 这里要处理index 把小写变成大写
    const {cityIndex,curIndex} = this.state
    // console.log(this.state.cityIndex,22)
    return  cityIndex.length?cityIndex.map((item,index)=>(
      <li className={curIndex===index?'city-active':'city-item'} key={item}>{item==='hot'?'热':item.toUpperCase()}</li>
      )):null
  }
  componentDidMount() {
    const fetch = async () => {
      const res = await axios.get("http://localhost:8080/area/city?level=1");
      const { cityList, cityIndex } = this.fromCityDate(res.data.body);

      const hotcity = async () => {
        const res = await axios.get("http://localhost:8080/area/hot");
        // 这里需要把hot的数据加到cityList和cityIndex里
        cityList["hot"] = res.data.body;
        cityIndex.unshift("hot");
        // 获取当前城市定位
        const curCity = await getCurCity();
        cityList["#"] = [curCity];
        cityIndex.unshift("#");
        console.log(cityList, cityIndex, curCity);
        this.setState({
          cityList,
          cityIndex
        })
      };
      hotcity();
    };
    fetch();
  }
  fromCityDate = (list) => {
    const cityList = {};
  
    list.forEach((item) => {
      // 1. 先把每一项的城市首字母取出来
      const first = item.short.substr(0, 1);
      // 2. 判断每个item里是否有这个城市
      if (cityList[first]) {
        cityList[first].push(item);
      } else {
        // 3. 如若没有,我们需要先创建一个空数组
        cityList[first] = [item];
      }
    });
    // 4. 这里我们需要选出所有的key
    const cityIndex = Object.keys(cityList).sort();
    return {
      cityList,
      cityIndex,
    };
  }
  rowRenderer =({
    key, // Unique key within array of rows
    index, // 当前的索引
    isScrolling, // 当前项是否正在滚动,是个布尔值
    isVisible, // 当前项在List是可见的
    style, // 必填, 若无会出现空白
  })=> {
    const {cityIndex,cityList} = this.state
    const letter = cityIndex[index]
    // console.log(cityList[letter])
    return (
      <div key={key} style={style} className='city'>
        <div className='title'>{fromCityIndex(letter)}</div>
        {cityList[letter].map(item=>(
          <div className='text' key={item.value}>{item.label}</div>
        ))}
      </div>
    );
  }
  render() {
    return (
      <div className="citylist">
        <NavBar
          className="navbar"
          mode="light"
          icon={<i className="iconfont icon-back"></i>}
          onLeftClick={() => this.props.history.go(-1)}
        >
          城市选择
        </NavBar>
        <AutoSizer>
          {({width,height})=> (<List
          width={width}
          height={height}
          rowCount={this.state.cityIndex.length}
          rowHeight={this.getCurHeight}
          rowRenderer={this.rowRenderer}
        />)}
        </AutoSizer>
       <ul className='city-news'>
         {this.renderIndex()}
       </ul>
      </div>
    );
  }
}
