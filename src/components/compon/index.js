// import React, { Component } from "react";
// import PropTypes from 'prop-types'
// import './index.css'

// const {Privider, Consumer} = React.createContext() 
// class Son extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       index:0
//     }
//   }
//   handleClick = (e,index) => {
//     e.preventDefault()
//     // console.log(e)
//     this.setState({
//       index:index
//     })
//     // 把索引传递给父组件
//     this.props.getSon(index)
//   }
//   render () {
//     return (
//       <div>
//         <ul>
//           {this.props.tabList&&this.props.tabList.map((item,index)=>(
//              <li className='tabs' onClick={(e)=>this.handleClick(e,index)} key={index}>{item}</li>
//           ))}
//       </ul>
//       <Contents  index={this.state.index}/>
//       </div>
//     )
//   }
// }

// class Contents extends Component {
//   render () {
//     return (
//       <div className='didd'>
//         <h3 className='active'>我是Tab{this.props.index}索引的内容</h3>
//         {/* <Consumer>{ (data)=> (<span>索引:{data}</span>) }</Consumer> */}
//       </div>
//     )
//   }
// }

// Contents.PropTypes={
//   index:PropTypes.number
// }
// export default class Tab extends Component {
//   constructor () {
//     super ()
//     this.state = {
//       tabs:['Tab1','Tab2','Tab3'],
//       index:''
//     }
//   }

//   getParent=(data)=>{
//     // 这里接受子组件的数据
//     console.log(data)
//     this.setState({
//       index:data
//     })
//   }
//   render () {
//     return (
//       // <Privider value={this.state.index}>
//       <div>
//         <div>我来自子组件的索引:{this.state.index}</div>
//         <h1>我是老大的props:{this.state.index}</h1>
//         <Son tabList={this.state.tabs} getSon={this.getParent}/>
//       </div>
//       // </Privider>
//     )
//   }
// }