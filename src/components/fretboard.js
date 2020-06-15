import React from 'react'
import Component from 'react'
import Strng from './string'
import './fretboard.css';

class Fretboard extends Component {
  constructor(props){
  	super(props)
  	this.state = { strings: 6,
  				   tuning: 'standard' }
  }

  render() {
    return <Strng />
  }
}

export default Fretboard