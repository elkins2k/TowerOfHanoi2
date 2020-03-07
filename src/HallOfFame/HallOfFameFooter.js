import React, { Component } from 'react';

export default class HallOfFameFooter extends Component {
  constructor ( props ) {
    super ()
  }
  render () {
    const scores = this.props.highScores.map ( (score,index) => {
      return (
        <div key={index}>
          {score.disks} disks: {score.moves} moves {score.time} seconds
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
