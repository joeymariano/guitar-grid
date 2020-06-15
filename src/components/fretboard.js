import React, { Component } from 'react'
import Strng from './string'
import './fretboard.css';

class Fretboard extends Component {
  constructor(props){
  	super(props)
  	this.state = { tuning: ['E2','A2', 'D3', 'G3', 'B3', 'E4'] }
  }

  stringList(tuning){
  	tuning.map( () => <Strng /> )
  }

  render() {
    return (
    	<ul>
    	{ this.stringList(this.state.tuning)}
    	</ul>
     )
  }
}

export default Fretboard