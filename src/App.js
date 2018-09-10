import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Bosch Dashboard</h1>
        </header>
        <main>
        <div className="sensors">
          <div className="temperature">
            <h2>Temperature</h2>
          </div>
          <div className="humidity">
            <h2>Humidity</h2>
          </div>
          <div className="noise">
          <h2>Noise</h2>
          </div>
          <div className="luminosity">
          <h2>Luminosity</h2>
          </div>
        </div>
      </main>
      </div>
      
    );
  }
}

export default App;
