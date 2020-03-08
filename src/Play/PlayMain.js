import React, { Component } from 'react'

export default class PlayMain extends Component {
    constructor (props) {
        super()
    }
    
    eachDisk (disk) {
        return disk.map ( disk => {
            return (
                <div
                    className = "disk"
                    id = {'disk'+disk}
                    key = {disk}
                >
                    {disk}
                </div>
            )
        })
    }
    
    eachStack (stack) {
            return (
                <div
                    className = "stack"
                    id = {stack[0]}
                    key = {stack[0]}
                    onClick = {() => this.props.handleStackClick ({stack})}
                >
                    {this.eachDisk (stack[1])}
                </div>
            )
    }

    render () {
        return (
            <div className="main">
                <div className="gameboard">
                    {Object.entries(this.props.stacks).map ( stack => {
                        return this.eachStack (stack)
                    })}
                </div>
            </div>
        )
        
    }
}