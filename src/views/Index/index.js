import React, { Component } from "react";
import Banner from "../../components/Banner/banner";
import SearchHead from "../../components/SearchHead/index";
import "./index.scss";
import Nav1 from "../../assets/images/nav-1.png";
import Nav2 from "../../assets/images/nav-2.png";
import Nav3 from "../../assets/images/nav-3.png";
import Nav4 from "../../assets/images/nav-4.png";
import axios from "axios";

function GridExample (props){
  const  data =  [
        {
          id: 1,
          img: Nav1,
          title: "整租",
          path: "/home/list",
        },
        {
          id: 2,
          img: Nav2,
          title: "合租",
          path: "/home/list",
        },
        {
          id: 3,
          img: Nav3,
          title: "地图找房",
          path: "/home/list",
        },
        {
          id: 4,
          img: Nav4,
          title: "去出租",
          path: "/home/list",
        },
      ]
    
     const PlaceHolder = () => {
    return data.map((item) => (
      <div
        className="nav"
        onClick={() => props.history.push(item.path)}
        key={item.id}
      >
        <div className="imgs">
          <img alt="" src={item.img}></img>
          <span>{item.title}</span>
        </div>
      </div>
    ));
  }

  
  return (
    <div className="nav">
      <PlaceHolder />
    </div>
  )

}

class Floors extends Component {
  state={
    floors:[]
  }
  componentDidMount () {
    axios.get('http://localhost:8080/home/groups',{
      params:'area=AREA%7C88cff55c-aaa4-e2e0'
    }).then(res=>{
      // console.log(res.data.body,33)
      this.setState({
        floors:res.data.body
      })
    })
  }
  render() {
    return (
      <div className="floors">
        <div className="floor-title">
          <h3>租房小组</h3>
          <span>更多</span>
        </div>
        <div className="floors-content">
         {this.state.floors.length?this.state.floors.map(item=>(
            <div className="floor-item" key={item.id}>
            <div className="floor-left">
              <strong>{item.title}</strong>
              <span>{item.desc}</span>
            </div>
            <div className="floor-img">
              <img
                alt=""
                src={`http://localhost:8080${item.imgSrc}`}
              ></img>
            </div>
          </div>
         )):null}
        </div>
      </div>
    );
  }
}

class Main extends Component {
  state = {
    goods:[]
  }
  componentDidMount() {
    axios.get('http://localhost:8080/home/news',{
      params:'area=AREA%7C88cff55c-aaa4-e2e0'
    }).then(res=>{
      console.log(res.data.body,44)
      this.setState({
        goods:res.data.body
      })
    })
  }
  render() {
    return (
      <div className="main-news">
        <div className="main-news-title">最新资讯</div>
        {this.state.goods.length?this.state.goods.map((item)=>(<div className="main-content" key={item.id}>
      <div className="main-img">
        <img
          alt=""
          src={`http://localhost:8080${item.imgSrc}`}
        ></img>
      </div>
      <div className="main-right">
        <div className="main-title">
         {item.title}
        </div>
        <div className="main-foot">
          <span>{item.from}</span>
          <span>{item.date}</span>
        </div>
      </div>
    </div>)):null}
      
      </div>
    );
  }
}
export default class Index extends Component {
  render() {
    return (
      <div className="homeindex">
        <SearchHead {...this.props} />
        <Banner />
        <GridExample {...this.props} />
        <Floors />
        <Main />
      </div>
    );
  }
}
