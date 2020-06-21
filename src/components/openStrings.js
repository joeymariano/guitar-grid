import React from 'react'
import OpenString from './openString'
import './openStrings.css'

function OpenStrings(props){
	const renderOpenStrings = () => {
		return props.stringNames.reverse().map( (stringName, idx) =>
			<OpenString stringName={stringName} key={idx}/>
		)
	}

	return <div id="openStrings">{ renderOpenStrings() }</div>
}

export default OpenStrings