import React, { Component } from "react";
import { Icon } from "antd-mobile";
import './comment.scss'
export default class Comment extends Component {
  constructor () {
    super ()
    this.state = {
      commentList:[],
      value:'',
      textValue:''
    }
  }
  handleChange =(e)=> {
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]:value
    })
  }
  handleBtn = (e)=>{
    e.preventDefault()
   // 点击按钮就把数据push到数组中
   let a={ 
        value:this.state.value,
        textvalue:this.state.textValue}

  this.setState({
    commentList: [a,...this.state.commentList]
  })

  // 清空输入框数据
  this.setState({
    value:'',
    textValue:'',
  })
  }
  deleteCom = (e,index) => {
    e.preventDefault()
    // 隐藏图标,删除数据
    let arr=this.state.commentList
    arr.splice(index,1)
    this.setState({
      commentList:arr
    })
  }
  render () {
    let commentList=this.state.commentList
    let icon = this.state.icon
  console.log(commentList,55)
    return (
      <div className='comment'>
        <div><input name='value' value={this.state.value} onChange={this.handleChange} placeholder='请输入评论人' /></div>
        <div><textarea name='textValue' value={this.state.textValue} onChange={this.handleChange} placeholder='请输入评论内容' /></div>
        <div><button onClick={this.handleBtn}>发表评论</button></div>
        <ul>
          {commentList.length===0?<li>暂无评论,快去评论吧!</li>:commentList.map((item,index)=>(
             <li key={index} >
             <h3>评论人:{item.value}<Icon  type='cross-circle' size='xxs' style={{width:'12px',height:'12px',margin:'0px 50px'}} onClick={(e)=>this.deleteCom(e,index)}></Icon></h3>
             <div>评论内容:{item.textvalue}</div>
             </li>
          ))}
        </ul>
      </div>
    )
  }
}