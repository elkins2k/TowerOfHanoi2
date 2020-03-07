import React, { Component } from 'react';
import { Link, Route, Switch, Redirect, withRouter } from 'react-router-dom'
import './App.css';
import Home from './Home/Home'
import HallOfFame from './HallOfFame/HallOfFame'
import Play from './Play/Play'

class App extends Component {
  constructor (props) {
    super ()
    this.state = {
      highScores: [
        {disks: 3, moves: 0, time: 0},
        {disks: 4, moves: 0, time: 0},
        {disks: 5, moves: 0, time: 0},
        {disks: 6, moves: 0, time: 0},
        {disks: 7, moves: 0, time: 0}
      ],
      stacks: {
        stack1: [],
        stack2: [],
        stack3: [],
        forTheWin: []
      },
      hint: 'start',
      diskInPlay: ''
    }
  }
  handleInputClick = (input) => {
    let newArray = []
    for ( let i = input; i > 0; i-- ) {
      newArray.push(i)
    }
    this.setState ({ 
      optimalMoves: 2**input-1, 
      stacks: {
          stack1: newArray,
          stack2: [],
          stack3: [],
          forTheWin: newArray
      },
      diskInPlay: '',
      thisMoves: 0,
      thisTime: 0
    })
    return this.props.history.push ('/play')
  }
  handleStackClick = (stack) => {
    let sourceStack = this.state.stacks[stack.stack[0]]
    console.log (sourceStack.length, this.state.diskInPlay)
    if ( sourceStack.length === 0 && this.state.diskInPlay === '' ) {
      this.setState ({
        hint: "empty"
      })
    } else if ( this.state.diskInPlay === '' ) {
        this.setState ({
          diskInPlay: sourceStack[sourceStack.length-1]
        })
        let newArray = sourceStack.pop()
        this.setState ({
          sourceStack: newArray,
          hint: "target"
        })
    } else if (this.state.diskInPlay < sourceStack[sourceStack.length-1] || sourceStack.length === 0) {
        let newArray = sourceStack.push(this.state.diskInPlay)
        this.setState ({
          thisMoves: this.state.thisMoves + 1,
          diskInPlay: '',
          sourceStack: newArray,
          hint: "source"
        })
    } else {
      this.setState ({
        hint: "illegal"
      })
    }
  }
  render() {
    return (
      <div className = "App" >
        <header>
          <Link to = "/" 
            title = "clicking here will reset the game"
          >
            <h1>Tower Of Hanoi 2.0</h1>
          </Link>
          <Link to = "/hall_of_fame" >
            <img
              src = "trophy.jpg"
              alt = "trophy.jpg"
            />
          </Link>
        </header>
        <main>
          <Switch>
            <Route
              exact path="/"
              render = {
                () => <Home
                  highScores={this.state.highScores}
                  handleInputClick={this.handleInputClick}
                />
              }
            />
            <Route
              path = "/hall_of_fame"
              render = {
                () => <HallOfFame
                  highScores = {this.state.highScores}
                />
              }
            />
            <Route
              path = "/play"
              render = {
                () => <Play
                  optimalMoves = {this.state.optimalMoves}
                  stacks = {this.state.stacks}
                  handleStackClick = {this.handleStackClick}
                  thisMoves = {this.state.thisMoves}
                  thisTime = {this.state.thisTime}
                  hint = {this.state.hint}
                />
              }
            />
             <Route
              path = "*"
              render = {
                () => <Redirect
                  to = "/"
                />
              }
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter ( App )