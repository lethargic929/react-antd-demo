import React, { Component } from "react";
import SearchHead from '../../components/SearchHead/index'
import "./index.scss";

function Tabs() {
return (
  <div className='list-tabs'>11345</div>
)
}
export default class CityList extends Component {
  render() {
    return <div className='city-list'>
     <div className='search1'> <SearchHead /></div>
      <Tabs />
      </div>;
  }
}
