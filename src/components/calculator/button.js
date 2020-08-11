import React, { Component } from 'react'
import './button.css'

class Button extends Component {
	constructor(props){
		super(props)
	}

	render() {
		return( <div class='field-grid-item'>
							<button>
							TEST BUTTON
							</button>
						</div> )
	}
}

export default Button