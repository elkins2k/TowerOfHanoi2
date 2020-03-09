import React, { Component } from 'react';
import axios from 'axios'

export default class WinnerSidebar extends Component {
  constructor ( props ) {
    super ()
    this.state = {
      fireworksImg: null
    }
  }

  whichHeader () {
    if (this.props.newHighScore) {
      return (
        <div>
          <h1>NEW HIGH SCORE</h1>
          <img
              src = {this.state.fireworksImg}
              alt = "fireworks"
          />
        </div>
      )
    } else {
      return (
        <div>
          <h1>You won!</h1>
        </div>
      )
    }
  }

  componentDidMount () {
    axios ({
      url: this.props.giphyEndPoint+'?api_key='+this.props.apiKey+'&tag=&rating=G&q=fireworks',
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
    return (
      <div className="sidebar">
        {this.whichHeader()}
        <p>You completed the game with</p>
        <p><b>{this.props.disks}</b> disks</p>
        <p>in <b>{this.props.moves}</b> moves</p>
        <p>(optimal is {this.props.optimalMoves} moves)</p>
        <p>in <b>{this.props.time}</b> seconds.</p>
      </div>
    );
  }
}
