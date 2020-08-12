import React from 'react'
import './css/note.css'

function Note(props){
	return (
		<div class="noteContainer">
		<div class={ "note " + "fret" + props.fretNumber } 
				 key={props.key}>{props.noteName}</div>
		</div>
	)
}

export default Note