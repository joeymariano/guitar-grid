import React, { Component } from 'react'
import Fretboard from './guitar/fretboard'
import Header from './header'
import Calculator from './calculator'
import './masterContainer.css'

class MasterContainer extends Component {
  constructor(props){
  	super(props)
  	this.state = { tuning: {guitar: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'],
                            bass: ['E1', 'A1', 'D2', 'G2'],
                            ukulele: ['G3', 'C3', 'E3', 'A3'],
                            mandolin: ['D3', 'G3', 'A4', 'E4']} }
  }

  chooseInstrument = () => {

  }

  render() {
    return (
    	<div id='masterContainer'>
        <Header />
        <Fretboard stringNames={this.state.tuning.ukulele}/>
        <Calculator />
    	</div> 
     )
  }
}

export default MasterContainer