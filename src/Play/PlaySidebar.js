import React, { Component } from 'react'
import data from './PlaySidebar.json'

export default class PlaySidebar extends Component {
    constructor (props) {
        super () 
    }
    render () {
        console.log(this.props)
        const message = data.messages.find (message => this.props.hint === message.title)
        return (
            <div className = "sidebar" >
                <h1>{message.h1}</h1>
                <p>{message.p}</p>
            </div>
        )
    }
}