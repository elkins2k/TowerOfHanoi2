import React, { Component } from 'react';
import HighScores from '../HallOfFame/HighScores'
import HomeSidebar from './HomeSidebar'

class Home extends Component {
  constructor (props) {
    super ()
    this.state = {
      input: [ 3,4,5,6,7 ],
      selection: 0,
    }
  }
  handleClick = (input) => {
    this.setState ({
      selection : input
    })
  }
  render () {
    const input = this.state.input.map ((number,index) => {
      return (
        <div onClick = {() => this.handleClick(number)} key={index}>
            {number} disks
        </div>
      )
    })
    return(
      <div className="Home">
        <div className = "main">
          <HomeSidebar />
          <div className = "interactive-area">
            <h1>Please select a game to play:</h1>
            {input}
          </div>
        </div>
        <div className = "footer">
          <HighScores />
        </div>
      </div>
    )
  }
}

export default Home;