import React, { Component } from 'react'

export default class PlayFooter extends Component {
    constructor (props) {
        super()
        }

    render () {
        // const highScoreTime = (this.props.highScores[this.props.stacks.stack1[0]-3] && console.log(this.props.highScores[this.props.stacks.stack1[0]-3].time))
        return (
            <div className="footer">
                {/* <div>
                    <b>score to beat:</b> {moves}moves {time}s
                </div> */}
                <div>
                    <b>moves:</b> {this.props.moves} 
                </div>
                <div>
                    <b>time:</b> {this.props.time} seconds
                </div>
            </div>
        )
    }
}