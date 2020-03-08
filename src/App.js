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
      stacks: {
        stack1: [],
        stack2: [],
        stack3: []},
      diskInPlay: null,
      moves: 0,
      time: 0,
      promptPlay: 'start',
    }
    this.forTheWin = []
    this.optimalMoves = null
    // this.winner = false
    // this.timerRunning = false
    this.highScores = [
      {disks: 3, moves: 0, time: 0},
      {disks: 4, moves: 0, time: 0},
      {disks: 5, moves: 0, time: 0},
      {disks: 6, moves: 0, time: 0},
      {disks: 7, moves: 0, time: 0}
    ]
  }

  handleInputClick = ( choice ) => {
    for ( let i = choice; i > 0; i-- ) {
      this.forTheWin.push (i)
    }
    this.optimalMoves = ( 2 ** choice - 1 ) 
    // this.winner = false
    // this.timerRunning = false
    this.setState ({ 
      stacks: {
          stack1: this.forTheWin,
          stack2: [],
          stack3: [],
      },
      diskInPlay: null,
      moves: 0,
      time: 0,
      promptPlay: 'start'
    })
    return this.props.history.push ('/play')
  }

  checkForTheWin () {
    if (this.state.stacks.stack3 === this.forTheWin) {
      console.log(`winner`)
      this.setState ({
        winner: true
      })
    }
  }

  timer () {
    if (!this.state.timerRunning) {
      this.time = setInterval (
        () => this.setState ({ 
          thisTime: this.state.thisTime +1,
          timerRunning: true
        }), 1000 
      )
    } else if (this.state.winner) {
      clearInterval (this.time)
    }
  }

  handleStackClick = (stack) => {
    // this.timer ()
    const sourceStack = this.state.stacks[stack.stack[0]]
    console.log (sourceStack, this.forTheWin)
    if ( sourceStack.length === 0 && this.state.diskInPlay === null ) {
      this.setState ({
        promptPlay: "empty"
      })
    } else if ( this.state.diskInPlay === null ) {
        this.setState ({
          diskInPlay: sourceStack[sourceStack.length-1]
        })
        const popArray = sourceStack.pop()
        this.setState ({
          sourceStack: popArray,
          promptPlay: "target"
        })
    } else if (this.state.diskInPlay < sourceStack[sourceStack.length-1] || sourceStack.length === 0) {
        const pushArray = sourceStack.push(this.state.diskInPlay)
        this.setState ({
          thisMoves: this.state.thisMoves + 1,
          diskInPlay: null,
          sourceStack: pushArray,
          promptPlay: "source"
        })
        this.checkForTheWin ()
    } else {
      this.setState ({
        promptPlay: "illegal"
      })
    }
  }

  render () {
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
                  highScores={this.highScores}
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
                  stacks = {this.state.stacks}
                  moves = {this.state.moves}
                  time = {this.state.time}
                  promptPlay = {this.state.promptPlay}
                  diskInPlay = {this.state.diskInPlay}
                  optimalMoves = {this.optimalMoves}
                  handleStackClick = {this.handleStackClick}
                  // timer = {this.timer}
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