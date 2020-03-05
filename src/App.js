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
      optimalMoves: 0,
      stack1: [],
      stack2: [],
      stack3: [],
      forTheWin: []
    }
    
  }
  handleInputClick = (input) => {
    console.log (input)
    for ( let i = input; i > 0; i-- ) {
      this.setState ({
        stack1: this.state.stack1.push[i]
      })
    }
    this.setState ({ 
      optimalMoves: 2**input-1, 
      forTheWin : this.state.stack1
    })
    return this.props.history.push ('/play')
    // return <Link to = "/play"></Link>
  }
  render() {
    console.log(this.props)
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
                (routerProps) => <Play
                  {...routerProps}
                  optimalMoves = {this.state.optimalMoves}
                  stack1 = {this.state.stack1}
                  stack2 = {this.state.stack2}
                  stack3 = {this.state.stack3}
                  forTheWin = {this.state.forTheWin}
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

export default withRouter(App)