import React, { Component } from 'react'
import data from './PlaySidebar.json'

export default class PlaySidebar extends Component {
    constructor (props) {
        super () 
    }
    render () {
        const message = data.messages.find (message => this.props.promptPlay === message.title)
        const displayDisk = ( () => {
            if (this.props.diskInPlay === null ) {
                return (
                    <div></div>
                )
            } else {
                return (
                    <div
                        className = "disk"
                        id = {'disk'+this.props.diskInPlay}
                        key = {this.props.diskInPlay}
                    >
                        {this.props.diskInPlay}
                </div>
                )
            }
        })()
        return (
            <div className = "sidebar" >
                <h1>
                    {message.h1}
                </h1>
                <p>
                    {message.p}
                </p>
                {displayDisk}
            </div>
        )
    }
}