import React from 'react'

import logo from './logo.svg'
import getAllFromCollection from './helpers/getAllFromCollection'
import sample from './helpers/sample'

import './App.css'

export default class App extends React.Component {
  state = {
    goal: '',
    tech: '',
    limitation: '',

    availableGoals: [],
    availableTechs: [],
    availableLimitations: [],
  }

  componentDidMount() {
    Promise.all([
      getAllFromCollection('goals'),
      getAllFromCollection('techs'),
      getAllFromCollection('limitations'),
    ])
      .then(([availableGoals, availableTechs, availableLimitations]) => {
        this.setState({
          availableGoals,
          availableTechs,
          availableLimitations,
        })
      })
  }

  randomizeGoal = () => this.setState(state => ({
    goal: sample(state.availableGoals).name,
  }))

  randomizeLimitation = () => this.setState(state => ({
    limitation: sample(state.availableLimitations).name,
  }))

  randomizeTech = () => this.setState(state => ({
    tech: sample(state.availableTechs).name,
  }))

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main className="App-intro">
          <section className="goal">
            <button
              type="button"
              onClick={this.randomizeGoal}
            >
              Create Goal
            </button>
            {this.state.goal}
          </section>

          <section className="limitation">
            <button
              type="button"
              onClick={this.randomizeLimitation}
            >
              Create Limitation
            </button>
            {this.state.limitation}
          </section>

          <section className="tech">
            <button
              type="button"
              onClick={this.randomizeTech}
            >
              Create Tech
            </button>
            {this.state.tech}
          </section>
        </main>
      </div>
    )
  }
}
