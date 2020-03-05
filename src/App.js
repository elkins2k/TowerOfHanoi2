import React, { Component } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import Home from './Home/Home'
import HallOfFame from './HallOfFame/HallOfFame'

export default class App extends Component {
  constructor () {
    super ()
    this.state = {
      highScores: [
        {disks: 3, moves: 0, time: 0},
        {disks: 4, moves: 0, time: 0},
        {disks: 5, moves: 0, time: 0},
        {disks: 6, moves: 0, time: 0},
        {disks: 7, moves: 0, time: 0}
      ]
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
                home => <Home highScores={this.state.highScores}/>
              }
            />
            <Route
              path="/hall_of_fame"
              render={
                park =>
                  <HallOfFame
                    highScores = {this.state.highScores}
                  />
              }
            />
            <Route
              path="*"
              render={
                () => <Redirect
                  to="/"
                />
              }
            />
          </Switch>
        </main>
      </div>
    );
  }
}