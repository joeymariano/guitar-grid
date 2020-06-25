import React from 'react';
import './App.css';
import Fretboard from './components/guitar/fretboard'
import Header from './components/header'

function App() {
  return (
    <div className="App">
    	<Header />
      <Fretboard/>
    </div>
  );
}

export default App;
