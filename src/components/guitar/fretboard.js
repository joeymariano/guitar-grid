import React, { Component } from 'react'
import Strings from './strings'
import './fretboard.css'

class Fretboard extends Component {
  constructor(props){
  	super(props)
  	this.state = { tuning: {guitar: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'],
                            bass: ['E1', 'A1', 'D2', 'G2'],
                            ukulele: ['G3', 'C3', 'E3', 'A3'],
                            mandolin: ['D3', 'G3', 'A4', 'E4']} }
  }

  render() {
    return (
    	<div class='fretboard'>
    		<Strings stringNames={this.state.tuning.guitar}/>
    	</div> 
     )
  }
}

export default Fretboard