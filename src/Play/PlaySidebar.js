import React, { Component } from 'react'
import data from './PlaySidebar.json'
import './PlaySidebar.css'

export default class PlaySidebar extends Component {
    constructor (props) {
        super () 
    }
    render () {
        console.log (this.props)
        const message = data.messages.find (message => this.props.promptPlay === message.title)
        return (
            <div className = "sidebar" >
                <h1>{message.h1}</h1>
                <p>{message.p}</p>
                <div
                    className = "disk"
                    id = {'sidebar-disk'+this.props.diskInPlay}
                    key = {this.props.diskInPlay}
                >
                    {this.props.diskInPlay}
                </div>
            </div>
        )
    }
}