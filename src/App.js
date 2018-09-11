import React, { Component } from 'react';
import logo from './assets/images/Bosch_LOGO_CURVAS_SLOGAN.png'
import colores from './assets/images/supergraphic.png'
import person from './assets/images/persona.jpg'
import ChartLines from './ChartLines';
// import facebook from 'public/glyphicons-social/png/glyphicons-social-31-facebook.png
import './App.css';

let temp_max = 30;
let temp_min = 10;
let temp_warn_max = 25;
let temp_warn_min = 5;
let hum_max = 20;
let hum_min = 40;
let hum_warn_max = 15;
let hum_warn_min = 5;
let noise_max = 30;
let noise_min = 90;
let noise_warn_max = 25;
let noise_warn_min = 85;
let lum_max = 500;
let lum_min = 100;
let lum_warn_max = 450;
let lum_warn_min = 95;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      history: [],
      temperature_string: "",
      noise_string: "",
      luminosity_string: "",
      humidity_string: ""
    };

    this.handleGetData = this.handleGetData.bind(this);
    this.validationMaxMin_temperature = this.validationMaxMin_temperature.bind(this);
    this.validationMaxMin_humidity = this.validationMaxMin_humidity.bind(this);
    this.validationMaxMin_noise = this.validationMaxMin_noise.bind(this);
    this.validationMaxMin_luminosity = this.validationMaxMin_luminosity.bind(this);
  }

  validationMaxMin_temperature(){
    let temperatureValidation = this.state.data.temperature;
    //console.log(this.state.data);

    if (temperatureValidation > temp_max || temperatureValidation < temp_min) {
      return this.setState({temperature_string: "CRITICAL"});
    } else if (temperatureValidation >= temp_warn_max || temperatureValidation <= temp_warn_min ) {
      return this.setState({temperature_string: "WARNING"});
    } 
      return this.setState({temperature_string: "Normal"});
  }

  validationMaxMin_humidity(){
    let humidityValidation = this.state.data.humidity;
    console.log(humidityValidation);

    if (humidityValidation > hum_max || humidityValidation < hum_min) {
      return this.setState({humidity_string: "CRITICAL"});
    } else if (humidityValidation >= hum_warn_max || humidityValidation <= hum_warn_min ) {
      return this.setState({humidity_string: "WARNING"});
    } 
      return this.setState({humidity_string: "Normal"});
  }

  validationMaxMin_noise(){
    let noiseValidation = this.state.data.illumination;
    //console.log(this.state.data);

    if (noiseValidation > noise_max || noiseValidation < noise_min) {
      return this.setState({noise_string: "CRITICAL"});
    } else if (noiseValidation >= noise_warn_max || noiseValidation <= noise_warn_min ) {
      return this.setState({noise_string: "WARNING"});
    } 
      return this.setState({noise_string: "Normal"});
  }

  validationMaxMin_luminosity(){
    let luminosityValidation = this.state.data.illumination;
    //console.log(this.state.data);

    if (luminosityValidation > lum_max || luminosityValidation < lum_min) {
      return this.setState({luminosity_string: "CRITICAL"});
    } else if (luminosityValidation >= lum_warn_max || luminosityValidation <= lum_warn_min ) {
      return this.setState({luminosity_string: "WARNING"});
    } 
      return this.setState({luminosity_string: "Normal"});
  }
  



  handleGetData(){
    fetch('https://connectorysolutions.com/talentfest/data/')
      .then(response => {
        return response.json()
      })
      .then(data => {
        //let time_measurement = data.map( item => parseFloat(item.time_measurement) );
        //time_measurement.unshift("time_measurement");
        let temperature = data.map( item => parseFloat(item.temperature) );
        temperature.unshift("temperature");
        let humidity = data.map(item => parseFloat(item.humidity));
        humidity.unshift("humidity");
        let luminosity = data.map( item => (parseFloat(item.illumination)*100)/500 );
        luminosity.unshift("luminosity");
        let noise = data.map(item => parseFloat(item.noise));
        noise.unshift("noise");
        let lastValues = data.length - 1;
        //console.log(lastValues);
        //console.log(this);
        this.setState({ data: data[lastValues], 
          history: { 
            temperature, noise, humidity, luminosity
          }
        });
        //console.log(data[0].temperature);
        this.validationMaxMin_temperature();
        this.validationMaxMin_humidity();
        this.validationMaxMin_noise();
        this.validationMaxMin_luminosity();
      }) 
  }



  componentWillMount() {
    fetch('https://connectorysolutions.com/talentfest/data/')
      .then(response => {
        return response.json()
      })
      .then(data => {
        //let time_measurement = data.map( item => parseFloat(item.time_measurement) );
        //time_measurement.unshift("time_measurement");
        let temperature = data.map( item => parseFloat(item.temperature) );
        temperature.unshift("temperature");
        let humidity = data.map(item => parseFloat(item.humidity));
        humidity.unshift("humidity");
        let luminosity = data.map( item => (parseFloat(item.illumination)*100)/500 );
        luminosity.unshift("luminosity");
        let noise = data.map(item => parseFloat(item.noise));
        noise.unshift("noise");
        let lastValues = data.length - 1;
        //console.log(lastValues);
        //console.log(this);
        this.setState({ data: data[lastValues], 
          history: { 
           temperature, noise, humidity, luminosity
          }
        });

        this.validationMaxMin_temperature();
        this.validationMaxMin_humidity();
        this.validationMaxMin_noise();
        this.validationMaxMin_luminosity();
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
        <img className="logo-bosch" src={logo} alt="" />
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
                  <img src={person} className="round" />
                </div>
              </div>
        </header>
        <main>
        <div className="sensors container">
        <div className="row">
          <div className="temperature sensor col-sm-12 col-md-3 col-lg-3">
            <h2 className="col-12">Temperature</h2>
            <span className="value col-12">{this.state.data.temperature}℃</span>
            <div className="notification-sensor col-12">
            {/* <Notification props={this.state.data.temperature}/> */}
              <span>{this.state.temperature_string}</span>
            </div>
          </div>
          <div className="humidity sensor col-sm-12 col-md-3 col-lg-3">
            <h2>Humidity</h2>
            <span className="value">{this.state.data.humidity}%</span>
            <div className="notification-sensor">
              <span>{this.state.humidity_string}</span>
            </div>
          </div>
          <div className="noise sensor col-sm-12 col-md-3 col-lg-3">
          <h2>Noise</h2>
          <span className="value">{this.state.data.noise}db</span>
          <div className="notification-sensor">
          <span>{this.state.noise_string}</span>
            </div>
          </div>
          <div className="luminosity sensor col-sm-12 col-md-3 col-lg-3">
          <h2>Luminosity</h2>
          <span className="value">{this.state.data.illumination}xl</span>
          <div className="notification-sensor">
            <span>{this.state.luminosity_string}</span>
            </div>
          </div>
         </div>
        </div>
        <ChartLines value={{data: this.state.history}}/>
        <div className="line"></div>
      </main>
        <footer>
          <div className="container final">
            <div className="row">
              <div className="col">
                <div className="iconos">
                  <h6>Stay up to date</h6>
                  <a href=""><i id="facebook" className="fab fa-facebook-f"></i></a>
                  <a href=""><i className="fab fa-twitter"></i></a>
                  <a href=""><i className="fab fa-youtube"></i></a>
                  <a href=""><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
              <div className="col">
                <div className="touch">
                  <h6>Get in touch</h6>
                  <p className="touch-text">General contact info</p>
                  <p className="touch-text">Licenses and Patents</p>
                  <p className="touch-text">Purchasing and Logistic</p>
                </div>
              </div>
              <div className="col">
                <div className="bosch">
                  <h6>You are on </h6>
                  <h4>Bosch Global</h4>
                  <h5><a className="bosch-link" target="_blank" href="https://www.bosch.com/websites-worldwide/">Bosch worldwide</a></h5>
                  <h6>All Bosch apps</h6>
                  <h5><a className="bosch-link" target="_blank" href="https://appcenter.bosch.com/">Bosch App Center</a></h5>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
          <div className="row bottom-text">
          <div className="col-12 no-padding">
            <span className="strong">&copy; 2018 Robert Bosch GmbH</span>
            <span>Terms of use</span>
            <span>Legal notice</span>
            <span>Privacy statement</span>
            <span>Cookies</span>
            <span>Privacy Settings</span>
            </div>
           </div>
          </div>
         <img className="img-fluid" src={colores} alt="" />
       </footer>
     </div>
        );
      }
    }
        
    export default App;