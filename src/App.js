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

    this.handleGetData = this.handleGetData.bind(this);
  }

  handleGetData(){
    fetch('https://connectorysolutions.com/talentfest/data/')
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data);
        let lastValues = data.length - 1;
        console.log(lastValues);
        console.log(this);
        this.setState({ data: data[lastValues] });
        console.log(data[0].temperature);
      }) 
  }



  componentWillMount() {
    fetch('https://connectorysolutions.com/talentfest/data/')
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data);
        let lastValues = data.length - 1;
        console.log(lastValues);
        console.log(this);
        this.setState({ data: data[lastValues] });
        console.log(data[0].temperature);
      })
    setInterval(this.handleGetData, 30000);
    // fetch('https://connectorysolutions.com/talentfest/data/')
    //   .then(response => {
    //     return response.json()
    //   })
    //   .then(data => {
    //     console.log(data);
    //     let lastValues = data.length - 1;
    //     console.log(lastValues);
    //     console.log(this);
    //     this.setState({ data: data[lastValues] });
    //     console.log(data[0].temperature);
    //   }) 
  }
  // getData(){
  //   fetch('https://connectorysolutions.com/talentfest/data/')
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(data => {
  //       console.log(data);
  //       let lastValues = data.length - 1;
  //       console.log(lastValues);
  //       this.setState({ data: data[lastValues] });
  //       //console.log(data[0].temperature);
  //     }) 
  // }
 

  render() {
    // const {data} = this.state;
    //console.log(this.state.data);

    return (
      <div className="App">
        <img className="img-fluid" src={colores} alt="" />
        <header className="container-fluid">
        <div className="row">
        <div className="col">
        <img className="img-fluid logo-bosch" src={logo} alt="" />
        </div>
        <div className="col name">
            <h3>XDK Monitoring</h3>
            </div>
        </div>
        <div className="line"></div>
        <div className="row">
              <div className="col">
                <div className="">
                  <i className="fas fa-bars"></i>
                </div>
                </div>
                <div className="col personal-info">
                  <i className="far fa-life-ring"></i>
                  <i className="fas fa-bell"></i>
                  <i className="fas fa-chevron-down"></i>
                  <img src={person} className="round img-fluid" />
                </div>
              </div>
        </header>
        <main>
        <div className="sensors container">
          <div className="temperature sensor">
            <h2>Temperature</h2>
            <span className="value">{this.state.data.temperature}℃</span>
            <div className="notification-sensor">
            {/* <Notification props={this.state.data.temperature}/> */}
            <i className="fas fa-exclamation notification-icon"></i>
              <span>Status</span>
            </div>
          </div>
          <div className="humidity sensor">
            <h2>Humidity</h2>
            <span className="value">{this.state.data.humidity}%</span>
            <div className="notification-sensor">
            <i className="fas fa-check notification-icon"></i>
              <span>Status</span>
            </div>
          </div>
          <div className="noise sensor">
          <h2>Noise</h2>
          <span className="value">{this.state.data.noise}db</span>
          <div className="notification-sensor">
          <i className="fas fa-times notification-icon"></i>
              <span>Status</span>
            </div>
          </div>
          <div className="luminosity sensor">
          <h2>Luminosity</h2>
          <span className="value">{this.state.data.illumination}xl</span>
          <div className="notification-sensor">
          <i className="fas fa-exclamation notification-icon"></i>
              <span>Status</span>
            </div>
          </div>
        </div>
        <ChartLines value={{data: this.state.data}}/>
      </main>
        <footer>
          <div class="container final">
            <div class="row">
              <div class="col">
                <div class="iconos">
                  <h6>Stay up to date</h6>
                  <a href=""><i class="fab fa-facebook-f"></i></a>
                  <a href=""><i class="fab fa-twitter"></i></a>
                  <a href=""><i class="fab fa-youtube"></i></a>
                  <a href=""><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>
              <div class="col">
                <div class="touch">
                  <h6>Get in touch</h6>
                  <p class="touch-text">General contact info</p>
                  <p class="touch-text">Licenses and Patents</p>
                  <p class="touch-text">Purchasing and Logistic</p>
                </div>
              </div>
              <div class="col">
                <div class="bosch">
                  <h6>You are on </h6>
                  <h4>Bosch Global</h4>
                  <h5><a class="bosch-link" target="_blank" href="https://www.bosch.com/websites-worldwide/">Bosch worldwide</a></h5>
                  <h6>All Bosch apps</h6>
                  <h5><a class="bosch-link" target="_blank" href="https://appcenter.bosch.com/">Bosch App Center</a></h5>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
          <div class="row bottom-text">
          <div class="col-12 no-padding">
            <span class="strong">&copy; 2018 Robert Bosch GmbH</span>
            <span>Terms of use</span>
            <span>Legal notice</span>
            <span>Privacy statement</span>
            <span>Cookies</span>
            <span>Privacy Settings</span>
            </div>
            </div>
          </div>
          <img class="img-fluid" src={colores} alt="" />
        </footer>
      </div>
      
    );
  }
}
    
    export default App;