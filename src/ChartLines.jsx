import React, { Component } from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

/*const day = "https://connectorysolutions.com/talentfest/data/2018-09-04%2000:00:01/2018-09-04%2023:59:59/";*/
/*var chart = c3.generate({
    data: {
        x: 'x',
        columns: [
            ['x', 30, 50, 100, 230, 300, 310],
            ['temperature', 30, 200, 100, 400, 150, 250],
            ['data2', 130, 300, 200, 300, 250, 450]
        ]
    }
});*/

class ChartLines extends Component {
    constructor(props){
        super(props);
        /*this.state = {
            temperature: []
          };*/

    }

    /*componentDidMount(){
        //console.log(this.props)
        fetch('https://connectorysolutions.com/talentfest/data/2018-09-04%2000:00:01/2018-09-04%2023:59:59/')
        .then(response => {
            console.log(response);
          return response.json()
        })
        .then(data => {
          console.log(data);
          //let lastValues = data;
          //console.log(this);
          this.setState({ temperature: data.temperature});
        })
    }*/

    render(){
        //console.log(this.props.value.data)
        
        return (
            <C3Chart data={{ json:this.props.value.data, type:'line' }}/>
            //<div>{this.state.temperature}</div>
        )
    }
}

export default ChartLines;