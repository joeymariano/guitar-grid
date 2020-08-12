import React, { Component } from 'react'
import './css/button.css'

class Button extends Component {
	constructor(props){
		super(props)

		this.state = {  }
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