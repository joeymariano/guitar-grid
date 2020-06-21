import React from 'react'
import './note.css'

function Note(props){
	return <div class={ "note " + "fret" + props.fretNumber } key={props.key}>{props.noteName}</div>
}

export default Note