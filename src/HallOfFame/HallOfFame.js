import React, { Component } from 'react';
import axios from 'axios'
import HallOfFameFooter from './HallOfFameFooter'

export default class HallOfFame extends Component {
  constructor ( props ) {
    super ()
    this.state = {
      fireworksImg: null
    }
    this.giphyEndPoint = 'https://api.giphy.com/v1/gifs/search'
    this.apiKey = 'C521h69tBB5OScRngdsjrWMAnzMfvHh6'
  }

  componentDidMount () {
    axios ({
      url: this.giphyEndPoint+'?api_key='+this.apiKey+'&tag=&rating=G&q=fireworks',
      method: 'get'
    })
    .then (response => {
      this.setState ({
        fireworksImg: response.data.data[Math.floor(Math.random()*25)].images.original.url
      })
    })
    .catch(error => console.log(error)
    )
  }

  render () {
    const scores = this.props.highScores.map ( (disks, index) => {
      return (
        <div key={index} className = "input">
          <b>{index+3}disks:</b> {disks.moves}moves {disks.time}s
        </div>
      )
    })
    return (
      <div>
        <div className = "middle">
          <div className = "sidebar">
            <h1>High Scores</h1>
            <img
              src = {this.state.fireworksImg}
              alt = "fireworks"
          />
          </div>
          <div className="main">
            {scores}
          </div>
        </div>
        <div className = "footer">
          <HallOfFameFooter highScores = {this.props.highScores}/>
        </div>
      </div>
      
    )
  }
}
