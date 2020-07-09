import React from 'react'
import Button from './button'
import Dropdown from './dropdown'
import './calculator.css'

function Calculator(){
	return( 	<form id="calculator">
							<legend>&nbsp;Calculate&nbsp;</legend>
							<br></br>
				      <div class='grid-container'>

				      	<Dropdown />
				      	<Button />
				      	<Button />

				      </div>
				    </form> )
}

export default Calculator