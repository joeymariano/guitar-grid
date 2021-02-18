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

  /* constants */

  TUNINGS = { guitar: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'].reverse(),
              bass: ['E1', 'A1', 'D2', 'G2'].reverse(),
              ukulele: ['G3', 'C3', 'E3', 'A3'].reverse(),
              mandolin: ['D3', 'G3', 'A4', 'E4'].reverse() }

  /* state update helpers */

  chooseInstrument = (instrument) => {
    this.setState({ instrument: instrument })
  }

  chooseRoot = (root) => {
    this.setState({ root: root })
  }

  updateNoteCollection = (noteCollection) => {
    this.setState({ noteCollection: noteCollection })
  }

  render() {
    return (
    	<div id='masterContainer'>
        <Header />

        { /*  pass all state props and state update helpers
              fretboard needs read only access to master container state
              calculator needs access to this.setState wrapper functions */ }

        <Fretboard  stringNames={ this.TUNINGS[this.state.instrument] /* passing tuning constant */ }
                    root={ this.state.root /* need to pass through fretboard */ }
                    noteCollection={ this.state.noteCollection /* passing state access variables for readOnly */ } />

        <Calculator chooseInstrument={ this.chooseInstrument /* passing state updater */ }
                    chooseRoot={ this.chooseRoot /* need to pass through fretboard */ }
                    updateNoteCollection={ this.updateNoteCollection } />
    	</div>
     )
  }
}

export default MasterContainer
