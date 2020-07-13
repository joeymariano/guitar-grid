import React from 'react'
import './dropdown.css'

function Dropdown(){
	return( <div class='field-grid-item'>
						<p>
					  	<label>Instrument </label>
					    <select id="instrumentList">
					      <option value="1">guitar</option>
					      <option value="2">bass</option>
					      <option value="3">ukulele</option>
					      <option value="4">mandolin</option>
					    </select>
					  </p> 
				  </div> )
}

export default Dropdown