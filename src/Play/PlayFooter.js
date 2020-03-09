import React, { Component } from 'react'

export default class PlayFooter extends Component {
    constructor (props) {
        super()
        }

    render () {
        console.log (this.props.highScores[this.props.stacks.stack1[0]-3].moves)
        return (
            <div className="footer">
                <div>
                    {/* score to beat: {this.props.highScores[this.props.stacks.stack1[0]-3].moves}moves {this.props.highScores[this.props.stacks.stack1[0]-3].time}s */}
                </div>
                <div>
                    moves: {this.props.moves} 
                </div>
                <div>
                    time: {this.props.time} seconds
                </div>
            </div>
        )
    }
}