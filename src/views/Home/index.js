import React, { Component } from "react";
import { Route } from "react-router-dom";
import Index from "../Index";
import Profile from "../Profile";
import News from "../News";
import HoustList from "../HouseList";
import { TabBar } from "antd-mobile";
import "./index.scss";


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: this.props.location.pathname,
      tabItems :[{
        title:'首页',
        icon: 'iconfont icon-ind',
        path:'/home'
      },
      {
        title:'找房',
        icon: 'iconfont icon-findHouse',
        path:'/home/list'
      },
      {
        title:'资讯',
        icon: 'iconfont icon-infom',
        path:'/home/news'
      },
      {
        title:'我的',
        icon: 'iconfont icon-my',
        path:'/home/profile'
      }]
    };
  }
  componentDidUpdate (pre) {
  if(pre.location.pathname !== this.props.location.pathname) {
    this.setState({
      selectedTab:this.props.location.pathname
    })
  }
  }
  renderTabItem=()=>{
    return (this.state.tabItems.map((item) => {
     return <TabBar.Item
        title={item.title}
        key={item.title}
        icon={<i className={item.icon} />}
        selectedIcon={<i className={item.icon} />}
        selected={this.state.selectedTab === item.path}
        onPress={() => {
          this.setState({
            selectedTab: item.path,
          });
          this.props.history.push(item.path);
        }}
      ></TabBar.Item>
    }))
  }
  render() {
    // console.log(this.props,11)
    return (
      <div className="home">
        <Route exact path="/home" component={Index} />
        <Route path="/home/list" component={HoustList} />
        <Route path="/home/news" component={News} />
        <Route path="/home/profile" component={Profile} />

        {/* tabbar */}
        <div>
          <TabBar
            noRenderContent={true}
            tintColor="#21b97a"
            barTintColor="white"
          >
            {this.renderTabItem()}
          </TabBar>
        </div>
      </div>
    );
  }
}
