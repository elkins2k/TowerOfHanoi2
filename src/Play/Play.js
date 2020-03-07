import React, { Component } from 'react';
import './Play.css'
import PlaySidebar from './PlaySidebar'
import PlayMain from './PlayMain'
import PlayFooter from './PlayFooter'

export default class Play extends Component {
  constructor (props) {
    super()
  }
  render () {
    return(
      <div className = "Play">
        <PlaySidebar hint = {this.props.hint} />
        <PlayMain
          stacks = {this.props.stacks}
          optimalMoves = {this.props.optimalMoves}
          handleStackClick = {this.props.handleStackClick}
          />
        <PlayFooter
          thisMoves = {this.props.thisMoves}
          thisTime = {this.props.thisTime}
        />
      </div>
    );
  }
}