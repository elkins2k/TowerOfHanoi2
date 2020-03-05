import React, { Component } from 'react';

export default class HallOfFameFooter extends Component {
  constructor ( props ) {
    super ()
  }
  render () {
    console.log (this.props.highScores)
    const scores = this.props.highScores.map ( (score,index) => {
      console.log(score)
      return (
        <div key={index}>
          {score.disks} disks: {score.moves} moves in {score.time} seconds
        </div>
      )
    })
    return (
      <div className="footer">
        <b>High Scores:</b>
        {scores}
      </div>
    )
  }
}
