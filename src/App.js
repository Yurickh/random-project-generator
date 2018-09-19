import React from 'react'
import logo from './logo.svg'
import './App.css'

export default class App extends React.Component {
  state = {
    goal: '',
    tech: '',
    limitation: '',
  }

  randomizeGoal = () => {
    this.setState({
      goal: 'a cool goal',
    })
  }

  randomizeLimitation = () => {
    this.setState({
      limitation: 'a funny limitation',
    })
  }

  randomizeTech = () => {
    this.setState({
      tech: 'an blazing fast tech',
    })
  }

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
