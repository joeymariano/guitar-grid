import React, { Component } from 'react'
import Fretboard from './guitar/fretboard'
import Header from './header'
import Calculator from './calculator/calculator'
import './masterContainer.css'
import tunings from '../abstracts/tunings'

class MasterContainer extends Component {
  constructor(props){
  	super(props)
  	this.state = { instrument: 'guitar' }
  }

  chooseInstrument = (instrument) => {
    // get tuning from tunings.js
    // compare (this) tuning state to what the dropdown string is in calculator
  }

  render() {
    return (
    	<div id='masterContainer'>
        <Header />
        <Fretboard stringNames={['E2', 'A2', 'D3', 'G3', 'B3', 'E4']}/>
        <Calculator chooseInstrument={ this.chooseInstrument } />
    	</div> 
     )
  }
}

export default MasterContainer