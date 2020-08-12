import React from 'react'
import Button from './button'
import Dropdown from './dropdown'
import './css/calculator.css'

function Calculator(props){
	return( 	<form id="calculator">
							<legend>&nbsp;Calculate&nbsp;</legend>
							<br></br>
				      <div class='grid-container'>

				      	<Dropdown chooseInstrument={ props.chooseInstrument } />
				      	<Button />
				      	<Button />

				      </div>
				    </form> )
}

export default Calculator