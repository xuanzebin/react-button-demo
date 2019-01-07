/**
 * @author xuanzebin
 * @date 2019-1-7
 * @desc create a button-ui
 */

import React from 'react'
import ReactDOM from 'react-dom'
import AtButton from './component/AtButton/AtButton'
import './index.scss'
class App extends React.Component {
  constructor () {
    super(...arguments)
    this.state = {}
  }
  x(){
    alert('你点击我了')
  }
  render () {
    return (
      <div className='app'>
        <AtButton 
        type='primary' 
        iconSize={30}
        loading
        onClick={this.x.bind(this)}
        className='hi'>Button</AtButton>
        <button>普通按钮</button>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('J_container'))
