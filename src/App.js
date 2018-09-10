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
          <div className="temperature sensor">
            <h2>Temperature</h2>
            <span className="value">50 C</span>
            <div className="notification-sensor">
              <i></i>
              <p>Status</p>
            </div>
          </div>
          <div className="humidity sensor">
            <h2>Humidity</h2>
            <span className="value">75%</span>
            <div className="notification-sensor">
              <i></i>
              <p>Status</p>
            </div>
          </div>
          <div className="noise sensor">
          <h2>Noise</h2>
          <span className="value">10db</span>
          <div className="notification-sensor">
              <i></i>
              <p>Status</p>
            </div>
          </div>
          <div className="luminosity sensor">
          <h2>Luminosity</h2>
          <span className="value">10xl</span>
          <div className="notification-sensor">
              <i></i>
              <p>Status</p>
            </div>
          </div>
        </div>
      </main>
      </div>
      
    );
  }
}

export default App;
