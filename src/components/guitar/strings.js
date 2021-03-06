import React from 'react'
import Strng from './string'
import './css/strings.css'

function Strings(props){

	const renderStrings = () => {
		// problems with the reverse method overwriting the original array

		return props.stringNames.map( (stringName, idx) =>
			<Strng stringName={stringName} key={idx}/>
		)
	}

	return <div id="strings">{ renderStrings() }</div>
}

export default Strings