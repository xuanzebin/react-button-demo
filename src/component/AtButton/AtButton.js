/**
 * @author xuanzebin
 * @date 2019-1-7
 * @desc a button ui
 */
import React from 'react'
import './AtButton.scss'
import AtIcon from '../AtIcon/AtIcon'
class AtButton extends React.Component {
  constructor () {
    super()
    this.state = {
      mousedown:false
    }
  }
  onClick(e){
    if (this.props.disabled) return 
    this.props.onClick?this.props.onClick.call(null,e):''
  }
  down(){
    if (this.props.disabled) return 
    this.setState({
      mousedown:true
    })
  }
  up(){
    if (this.props.disabled) return 
    this.setState({
      mousedown:false
    })
  }
  render () {
    return (
      <div 
      className={`AtButton 
      ${this.props.type==='secondary'?'secondary':''} 
      ${this.props.disabled?'disabled':''}
      ${this.state.mousedown?'down':''}
      ${this.props.className}
      `}
      onClick={this.onClick.bind(this)}
      onMouseDown={this.down.bind(this)}
      onMouseUp={this.up.bind(this)}
      >
      {this.props.loading?<AtIcon size={this.props.iconSize}></AtIcon>:''}
      {this.props.children}
      </div>
    )
  }
}

export default AtButton
