import React, { Component } from 'react';

export default class HallOfFameFooter extends Component {
  constructor ( props ) {
    super ()
  }
  render () {
    const scores = this.props.highScores.map ( (disks, index) => {
      return (
        <div key={index}>
          <b>{index+3}disks:</b> {disks.moves}moves {disks.time}s
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
