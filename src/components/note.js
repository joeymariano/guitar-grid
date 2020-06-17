import React from 'react'
import './note.css'

function Note(props){
	return( <div class="note" key={props.key}>
						{props.stringName}
					</div> )
}

export default Note