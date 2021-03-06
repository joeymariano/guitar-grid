import React from 'react'
import Note from './note'
import './css/string.css'
import { notesFlats, notesSharps } from '../../abstracts/tonal_system'

function Strng(props){
	let frets = ['','','','','','','','','','','','','']
	// 13 values to include open strings

	const calcNote = (note, key) => {
		let noteLocal = notesFlats.indexOf(note)
		let result = notesFlats[noteLocal + key]
		return result
	}

	const renderNotes = (stringName) => {
		return frets.map( (emptyString, idx) => 
			<Note noteName={ calcNote(stringName, idx) } key={idx} fretNumber={idx}/> 
		)
	}

	return( <div class="string" key={props.key}>
						{ renderNotes(props.stringName) }
					</div> )
}

export default Strng