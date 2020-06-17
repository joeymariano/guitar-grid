import React from 'react'
import Note from './note'
import './string.css'

function Strng(props){
	return( <div class="string" key={props.key}>
						<Note name={props.stringName} />
						<Note />
						<Note />
						<Note />
						<Note />
						<Note />
						<Note />
						<Note />
						<Note />
						<Note />
						<Note />
						<Note />
					</div> )
}

export default Strng