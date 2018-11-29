import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    command: '',
    result: ''
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input value={this.state.command} onChange={(e) => {
            this.setState({
              command: e.target.value
            })
          }}/>
          <button
            onClick={async () => {
              if (window.run) {
                const result = await window.run(this.state.command)
                console.log(result)
                this.setState({
                  result
                })
              }
            }}
            style={{margin: 20}}
          >
            Run
          </button>
          {this.state.result}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
