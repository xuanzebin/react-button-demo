/**
 * @author xuanzebin
 * @date 2019-1-7
 * @desc a icon ui
 */
import React from 'react'
import './AtIcon.scss'

class AtIcon extends React.Component {
  constructor () {
    super(...arguments)
    this.state = {}
  }

  render () {
    return (
      <div className="AtIcon">
        <div className="lds-ring">
          <div style={{width:this.props.size,height:this.props.size}}></div>
          <div style={{width:this.props.size,height:this.props.size}}></div>
          <div style={{width:this.props.size,height:this.props.size}}></div>
          <div style={{width:this.props.size,height:this.props.size}}></div>
        </div>
      </div>
    )
  }
}

export default AtIcon
