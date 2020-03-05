import React, { Component } from 'react';
import HomeSidebar from './HomeSidebar'
import HomeMain from './HomeMain'
import HallOfFameFooter from '../HallOfFame/HallOfFameFooter';

export default class Home extends Component {
  constructor (props){
    super()
  }
  render () {
    return(
      <div className = "Home">
        <HomeSidebar />
        <HomeMain handleInputClick={this.props.handleInputClick}/>
        <HallOfFameFooter highScores={this.props.highScores}/>
        </div>
      )
    }
  }
  
