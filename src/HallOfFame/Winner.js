import React, { Component } from 'react';
import WinnerMain from './WinnerMain'
import WinnerSidebar from './WinnerSidebar'
import HallOfFameFooter from './HallOfFameFooter';

const giphyEndPoint = 'https://api.giphy.com/v1/gifs/search'
const apiKey = 'C521h69tBB5OScRngdsjrWMAnzMfvHh6'

export default class Winner extends Component {
  constructor ( props ) {
    super ()
    this.state = {
      winnerImg: null
    }
  }

  render () {
    return (
      <div className = "Winner">
        <div className = "middle">
        <WinnerSidebar
          newHighScore={this.props.newHighScore}
          giphyEndPoint = {giphyEndPoint}
          apiKey = {apiKey}
          moves = {this.props.moves}
          time = {this.props.time}
          disks = {this.props.disks}
          optimalMoves = {this.props.optimalMoves}
        />
        <WinnerMain
          giphyEndPoint = {giphyEndPoint}
          apiKey = {apiKey}
       />
      </div>
        <HallOfFameFooter highScores={this.props.highScores} />
      </div>
    )
  }
}
