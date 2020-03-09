import React, { Component } from 'react';
import { Link, Route, Switch, Redirect, withRouter } from 'react-router-dom'
import './App.css';
// import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css'
import Home from './Home/Home'
import HallOfFame from './HallOfFame/HallOfFame'
import Play from './Play/Play'
import Winner from './HallOfFame/Winner'

export default withRouter (class App extends Component {
  constructor (props) {
    super ()
    this.getHighScores = []
    for ( let i = 3; i <= 7; i++) {
      if (localStorage.getItem(i+'disks moves') !== null) {
        this.getHighScores[i-3] = {
          moves: (parseInt(localStorage.getItem(i+'disks moves'))),
          time: (parseInt(localStorage.getItem(i+'disks time')))
        }
      } else {
        this.getHighScores[i-3] = {
          moves: 0,
          time: 0
        }
      }
    }
    this.state = {
      stacks: {
        stack1: [],
        stack2: [],
        stack3: []},
      diskInPlay: null,
      promptPlay: 'start',
      highScores: this.getHighScores
    }
    this.winner = false
    this.optimalMoves = null
    this.timerRunning = false
    this.newHighScore = false
  }

  handleInputClick = ( choice ) => {
    let initialize = []
    for ( let i = choice; i > 0; i-- ) {
      initialize.push (i)
    }
    
    this.optimalMoves = ( 2 ** choice - 1 ) 
    this.timerRunning = false
    this.newHighScore = false
    this.setState ({ 
      stacks: {
          stack1: initialize,
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
    if (this.state.stacks.stack1.length === 0 && this.state.stacks.stack2.length === 0) {
      clearInterval (this.seconds)
      let checkHighScores = this.state.highScores
      for (let i = 0; i < checkHighScores.length; i++ ) {
        if (i+3 === this.state.stacks.stack3[0]) {
          if (checkHighScores[i].time < this.state.time || checkHighScores.time === 0) {
            checkHighScores[i].time = this.state.time
            localStorage.setItem (i+3+'disks time', this.state.time)
            this.newHighScore = true
          }
          if (checkHighScores[i].moves < this.state.moves || checkHighScores[i].moves === 0) {
            checkHighScores[i].moves = this.state.moves + 1
            localStorage.setItem (i+3+'disks moves', this.state.moves + 1)
            this.newHighScore = true
          }
          this.setState ({
            highScores: checkHighScores
          })
        }
      }
      return this.props.history.push ('/winner')
    }
  }

  timer () {
    if (!this.timerRunning) {
      this.seconds = setInterval (
        () => this.setState ({ 
          time: this.state.time +1,
        }), 1000 
      )
      this.timerRunning = true
    }
  }

  handleStackClick = (stack) => {
    this.timer ()
    const sourceStack = this.state.stacks[stack.stack[0]]
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
          moves: this.state.moves + 1,
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
              alt = "trophy"
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
                  stacks = {this.state.stacks}
                  moves = {this.state.moves}
                  time = {this.state.time}
                  promptPlay = {this.state.promptPlay}
                  diskInPlay = {this.state.diskInPlay}
                  highScores = {this.state.highScores}
                  optimalMoves = {this.optimalMoves}
                  handleStackClick = {this.handleStackClick}
                  timer = {this.timer}
                />
              }
            />
            <Route
              path = "/winner"
              render = {
                () => <Winner  
                  moves = {this.state.moves}
                  time = {this.state.time}
                  highScores = {this.state.highScores}
                  newHighScore = {this.newHighScore}
                  optimalMoves = {this.optimalMoves}
                  disks = {this.state.stacks.stack3[0]}
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
})