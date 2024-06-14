import React, { Component } from 'react'
import Table from "./Table"

class App extends Component {
  state = {
    characters: [
      {
        name: 'Charlie',
        Job: 'Janitor',
      },
      {
        name: 'Mac',
        Job: 'Bouncer',
      },
      {
        name: 'Charlie',
        Job: 'Bartender',
      },
      {
        name: 'Charlie',
        Job: 'Bouncer',
      },
      {
        name: 'Charlie',
        Job: 'Bartender',
      }
    ],
  }

  removeCharacter = (index) => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((characters, i) => {
        return i !== index
      }),
    })
  }

  render() {
    const { characters } = this.state

    return (
      <div className="container">
        <Table characterData={ characters } removeCharacter={this.removeCharacter} />
      </div>
    )
  }
}

export default App