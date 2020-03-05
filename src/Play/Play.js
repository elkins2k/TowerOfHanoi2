import React, { Component } from 'react';
import PlaySidebar from './PlaySidebar'
import PlayMain from './PlayMain'
import PlayFooter from './PlayFooter'

export default class Play extends Component {
  constructor (props) {
    super()
  }
  render () {
    console.log ('play', this.props)
    return(
      <div className = "Play">
        <PlaySidebar />
        <PlayMain />
        <PlayFooter />
      </div>
    );
  }
}