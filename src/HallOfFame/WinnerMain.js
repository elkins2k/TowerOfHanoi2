import React, { Component } from 'react';
import axios from 'axios'

export default class WinnerMain extends Component {
  constructor ( props ) {
    super ()
    this.state = {
      winnerImg: null
    }
  }
  
  componentDidMount () {
    axios ({
      url: this.props.giphyEndPoint+'?api_key='+this.props.apiKey+'&tag=&rating=G&q=winner',
      method: 'get'
    })
    .then (response => {
      this.setState ({
        winnerImg: response.data.data[Math.floor(Math.random()*25)].images.original.url
      })
    })
    .catch(error => console.log(error)
    )
  }

  render () {
    return(
      <div className = "main" >
        <img
          src={this.state.winnerImg}
          alt="winner" />
      </div>
    );
  }
}