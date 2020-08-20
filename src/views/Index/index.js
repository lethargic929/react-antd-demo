import React, { Component } from "react";
import Banner from "../../components/Banner/banner";
import SearchHead from "../../components/SearchHead/index";
import "./index.scss";
import Nav1 from "../../assets/images/nav-1.png";
import Nav2 from "../../assets/images/nav-2.png";
import Nav3 from "../../assets/images/nav-3.png";
import Nav4 from "../../assets/images/nav-4.png";
import axios from "axios";
import { Flex,Grid } from 'antd-mobile';


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
    return (
      <div className='nav'>
        <Flex>
        {data.map(item=>(
          <Flex.Item key={item.id} onClick={()=>this.props.history.push('/home/list')}>
          <img alt='' src={item.img}></img>
        <span>{item.title}</span>
        </Flex.Item>
        ))}
        </Flex>
      </div>
    )
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
       
         <Grid columnNum={2} data={this.state.floors} hasLine={false} square={false}
         renderItem={item => (<Flex className="group-item" justify="around">
          <div className='desc'>
            <div>{item.title}</div>
            <div className='info'>{item.desc}</div>
          </div>
          <img src={`http://localhost:8080${item.imgSrc}`}  alt="" />
        </Flex>)}
         />
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
