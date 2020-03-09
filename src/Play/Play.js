import React, { Component } from 'react';
import './Play.css'
import PlaySidebar from './PlaySidebar'
import PlayMain from './PlayMain'
import PlayFooter from './PlayFooter'

export default class Play extends Component {
  constructor (props) {
    super( )
  }
  render () {
    return (
      <div className = "Play">
        <div className = "middle">
          <PlaySidebar
            promptPlay = {this.props.promptPlay}
            diskInPlay = {this.props.diskInPlay} 
          />
          <PlayMain
            stacks = {this.props.stacks}
            handleStackClick = {this.props.handleStackClick}
            />
        </div>
        <PlayFooter
          highScores = {this.props.highScores}
          stacks = {this.props.stacks}
          moves = {this.props.moves}
          time = {this.props.time}
        />
      </div>
    )
  }
}