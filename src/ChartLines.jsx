import React, { Component } from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

class ChartLines extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log(this.props)
    }

    render(){
        console.log(this.props.value.data)
        
        return (
            <C3Chart data={{ json:this.props.value.data, type:'line' }}/>
        )
    }
}

export default ChartLines;