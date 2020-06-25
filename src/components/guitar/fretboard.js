import React from 'react'
import Strings from './strings'
import './fretboard.css'

function Fretboard(props) {
  return (
  	<div class='fretboard'>
  		<Strings stringNames={props.stringNames}/>
  	</div> 
   )
}

export default Fretboard