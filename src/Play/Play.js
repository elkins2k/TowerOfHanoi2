import React, { Component } from 'react';

class Play extends Component {

  render () {
    console.log ('play', this.props)
    return(
      <div className = "main" >
        Play
      </div>
    );
  }
}

export default Play;
