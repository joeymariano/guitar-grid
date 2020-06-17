import React, { Component } from 'react'
import Strng from './string'
import './fretboard.css'

class Fretboard extends Component {
  constructor(props){
  	super(props)
  	this.state = {  tuning: ['E2','A2', 'D3', 'G3', 'B3', 'E4'] }
  }

  renderStrings = (tuning) => {
  	return this.state.tuning.reverse().map( (stringName, idx) => 
      <Strng stringName={stringName} key={idx}/> )
  }

  render() {
    return (
    	<div class='fretboard'>
    		{ this.renderStrings() }
    	</div>
     )
  }
}

export default Fretboard