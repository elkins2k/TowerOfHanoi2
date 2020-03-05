import React, { Component } from 'react';
import './HomeMain.css'

export default class HomeMain extends Component {
  constructor (props) {
    super ()
    this.state = {
      inputOptions: [ 3,4,5,6,7 ],
      selection: 0,
    }
  }
  handleInputClick = (input) => {
    this.setState ({
      selection : input,
    })
    console.log (input)
  }
  render () {
    const input = this.state.inputOptions.map ((number,index) => {
      return (
        <div className="input"
          onClick = {() => this.handleInputClick(number)} key={index}>
            {number} disks
        </div>
      )
    })
    return(
      <div className="main">
        <h1>Please select a game to play:</h1>
        <div>
          {input}
        </div>
      </div>
    )
  }
}