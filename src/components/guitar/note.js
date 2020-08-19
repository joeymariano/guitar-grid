import React from 'react'
import './css/note.css'

function Note(props){
	return (
		<div class="noteContainer">
			{/* need to swap note for note-selected when clicked */}
			<div class={ "note " + "fret" + props.fretNumber } 
			key={props.key}>{props.noteName}</div>

		</div>
	)
}

export default Note