import React, { Component } from 'react'
import './css/button.css'

class Button extends Component {
	constructor(props){
		super(props)
		this.state = { activated: false }

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick = (event) => {
		event.preventDefault()
		this.setState({ activated: this.state.activated = !this.state.activated })
	}

	render() {
		return( <div class='field-grid-item'>
							<button onClick={ this.handleClick }>
							TEST BUTTON
							</button>
						</div> )
	}
}

export default Button