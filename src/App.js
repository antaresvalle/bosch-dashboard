import React, { Component } from 'react';
import logo from './assets/images/Bosch_LOGO_CURVAS_SLOGAN.png'
import colores from './assets/images/supergraphic.png'
import person from './assets/images/persona.jpg'
import ChartLines from './ChartLines';
// import facebook from 'public/glyphicons-social/png/glyphicons-social-31-facebook.png
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentWillMount() {
    fetch('https://connectorysolutions.com/talentfest/data/2018-09-04 22:00:00/2018-09-0 22:00:00')
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data);
        let lastValues = data.length - 1;
        console.log(lastValues);
        this.setState({ data: data[lastValues] });
        //console.log(data[0].temperature);
      });
  }
 

  render() {
    // const {data} = this.state;
    //console.log(this.state.data);

    return (
      <div className="App">
        <header className="App-header">
        <img class="img-fluid" src={colores} alt="" />
          <nav class="navbar sticky-top fixed-top navbar-light top">
            <img class="img-fluid logo-bosch" src={logo} alt="" />
            <h3>XDK Monitoring</h3>
          </nav>
          <nav class="navbar sticky-top fixed-top navbar-light">
            <i class="fas fa-bars"></i>
            <ul class="nav justify-content-end right-info">
              <li class="nav-item">
                <i class="far fa-life-ring"></i>
              </li>
              <li class="nav-item">
                <i class="fas fa-bell"></i>
              </li>
              <li class="nav-item">
                <p>Nombre de</p>
              </li>
              <li class="nav-item">
                <span><i class="fas fa-chevron-down"></i></span>
              </li>
              <li class="nav-item">
                <img src={person} class="round img-fluid" />
              </li>
            </ul>
          </nav>
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
        <ChartLines value={{data: this.state.data}}/>
      </main>
      <div>
      </div>
      <footer>
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="iconos">
                  <h6></h6>
                  <a href=""><i class="fab fa-facebook-f"></i></a>
                  <a href=""><i class="fab fa-twitter"></i></a>
                  <a href=""><i class="fab fa-youtube"></i></a>
                  <a href=""><i class="fab fa-linkedin-in"></i></a>
                </div>
                <div class="touch">
                  <h6></h6>
                  <p></p>
                  <p></p>
                  <p></p>
                </div>
                <div class="bosch">
                  <h6></h6>
                  <h4></h4>
                  <h5><a href=""></a></h5>
                  <h6></h6>
                  <h5><a href=""></a></h5>
                </div>
              </div>
            </div>
          </div>
          <div class="row"></div>
          <img class="img-fluid" src={colores} alt="" />
        </footer>
      </div>
      
    );
  }
}
    
    export default App;
