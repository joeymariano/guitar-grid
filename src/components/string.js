import React from 'react'
import Note from './note'
import './string.css'
import { notesFlats, notesSharps } from '../abstracts/tonal_system'

function Strng(props){
	let frets = new Array('','','','','','','','','','','','');

	const calcNote = (note, key) => {
		let noteLocal = notesFlats.indexOf(note)
		let result = notesFlats[noteLocal + (key + 1)]
		return result
	}

	const renderNotes = (stringName) => {
		return frets.map( (nothin, idx) => 
			<Note noteName={ calcNote(stringName, idx) } key={idx}/> 
		)
	}

	return( <div class="string" key={props.key}>
						{ renderNotes(props.stringName) }
					</div> )
}

export default Strng