import React, { Component } from 'react'
import Strings from './strings'
import './fretboard.css'

class Fretboard extends Component {
  constructor(props){
  	super(props)
  	this.state = { tuning: ['E2','A2', 'D3', 'G3', 'B3', 'E4'] }
  }

  render() {
    return (
    	<div class='fretboard'>

    		<Strings stringNames={this.state.tuning}/>
    	</div> 
     )
  }
}

export default Fretboard