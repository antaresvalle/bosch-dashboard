import React, { Component } from 'react';
import logo from './assets/images/Bosch_LOGO_CURVAS_SLOGAN.png'
import colores from './assets/images/supergraphic.png'
import person from './assets/images/persona.jpg'
// import facebook from 'public/glyphicons-social/png/glyphicons-social-31-facebook.png
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('https://connectorysolutions.com/talentfest/data/2018-09-04 22:00:00/2018-09-0 22:00:00')
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data);
        let lastValues = data.length - 1;
        console.log(lastValues);
        this.setState({ data: data[lastValues] });
        console.log(data[0].temperature);
      });
  }

  render() {
    // const {data} = this.state;
    // console.log({data});

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Bosch Dashboard</h1>
        </header>
        <main>
        <div className="sensors">
          <div className="temperature sensor">
            <h2>Temperature</h2>
            <span className="value">{this.state.data.temperature}</span>
            <div className="notification-sensor">
              <i></i>
              <p>Status</p>
            </div>
          </div>
          <div className="humidity sensor">
            <h2>Humidity</h2>
            <span className="value">{this.state.data.humidity}%</span>
            <div className="notification-sensor">
              <i></i>
              <p>Status</p>
            </div>
          </div>
          <div className="noise sensor">
          <h2>Noise</h2>
          <span className="value">{this.state.data.noise}db</span>
          <div className="notification-sensor">
              <i></i>
              <p>Status</p>
            </div>
          </div>
          <div className="luminosity sensor">
          <h2>Luminosity</h2>
          <span className="value">{this.state.data.illumination}xl</span>
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
