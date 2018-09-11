import React from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

class Donut extends React.Component {
    constructor(props) {
       super(props);
    }

    componentDidMount(){
        console.log(this.props)
    }
    
    render(){
       console.log(this.props.value.data.temperature)
       const full = parseFloat(this.props.value.data.temperature);
       const empty = 100 -full;
       return (
           <C3Chart data={{json:{"":[empty],"temperature":[full]}, type:'donut' }}/>
       )
   }
}

export default Donut;