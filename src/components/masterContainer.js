import React, { Component } from 'react'
import Fretboard from './guitar/fretboard'
import Header from './header'
import Calculator from './calculator/calculator'
import './masterContainer.css'

class MasterContainer extends Component {
  constructor(props){
  	super(props)
  	this.state = {  instrument: 'guitar',
                    root: 'C',
                    noteCollection: ['C', 'E', 'G'] }
  }

  tunings = { guitar: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'].reverse(),
              bass: ['E1', 'A1', 'D2', 'G2'].reverse(),
              ukulele: ['G3', 'C3', 'E3', 'A3'].reverse(),
              mandolin: ['D3', 'G3', 'A4', 'E4'].reverse() }

  chooseInstrument = (instrument) => {
    this.setState({ instrument: instrument })
  }

  render() {
    return (
    	<div id='masterContainer'>
        <Header />

        <Fretboard  stringNames={ this.tunings[this.state.instrument] }
                    root={ this.state.root }
                    noteCollection={ this.state.noteCollection} />

        <Calculator chooseInstrument={ this.chooseInstrument } />
    	</div>
     )
  }
}

export default MasterContainer
