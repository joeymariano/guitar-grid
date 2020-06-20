import React from 'react'
import OpenString from './openString'

function OpenStrings(props){
	debugger
	const renderOpenStrings = () => {
		return props.stringNames.map( (stringName, idx) =>
			<OpenString stringName={stringName} key={idx}/>
		)
	}

	return <div id="openStrings">{ renderOpenStrings() }</div>
}

export default OpenStrings