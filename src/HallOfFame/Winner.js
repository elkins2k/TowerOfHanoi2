import React, { Component } from 'react';

export default class Winner extends Component {
  constructor ( props ) {
    super ()
  }

  render () {
    console.log (this.props)
    return(
      <div className = "Winner" >
        HallOfFame
      </div>
    );
  }
}
