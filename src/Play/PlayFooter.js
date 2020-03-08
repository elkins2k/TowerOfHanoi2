import React, { Component } from 'react'

export default class PlayFooter extends Component {
    constructor (props) {
        super()
        }
    render () {
        return (
            <div className="footer">
                <div>
                    moves: {this.props.thisMoves} 
                </div>
                <div>
                time: {this.props.thisTime} seconds
                </div>
            </div>
        )
    }
}