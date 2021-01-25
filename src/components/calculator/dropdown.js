import React, { Component } from 'react'
import './css/dropdown.css'

class Dropdown extends Component {
	constructor(props){
		super(props)
		this.state = { instrument: 'guitar' }

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
    this.props.chooseInstrument(event.target.value)
    // sending to master container to change state
  }

	render(){
		return( <div class='field-grid-item'>
							<p>
						  	<label>Instrument </label>
						    <select id="instrumentList" value={this.state.value} onChange={this.handleChange}>
						 			{/* need to change this to spit out this.props.list
						 					and feed it from masterContainer => dropdown */}
						      <option value="guitar">guitar</option>
						      <option value="bass">bass</option>
						      <option value="ukulele">ukulele</option>
						      <option value="mandolin">mandolin</option>
						    </select>
						  </p>
					  </div> )
	}
}

export default Dropdown
