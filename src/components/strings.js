import React from 'react'
import Strng from './string'
import './strings.css'

function Strings(props){

	const renderStrings = () => {
		return props.stringNames.map( (stringName, idx) =>
			<Strng stringName={stringName} key={idx}/>
		)
	}

	return <div id="strings">{ renderStrings() }</div>
}

export default Strings