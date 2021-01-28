import React from 'react'
import Button from './button'
import Dropdown from './dropdown'
import './css/calculator.css'

function Calculator(props){
	return( 	<form id="calculator">
							<legend>&nbsp;Calculate&nbsp;</legend>
							<br />
							<Dropdown chooseInstrument={ props.chooseInstrument } />
							<br />
				      <div class='grid-container'>
				      	<Button title={ "MAJOR Δ" } />
				      	<Button title={ "MINOR -" } />
								<Button title={ "AUGMENTED +" } />
								<Button title={ "DIMINISHED o" } />
				      </div>
				    </form> )
}

export default Calculator
