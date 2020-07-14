import React, { useEffect, useState } from 'react'
import './App.css'
import { getAllNotes, deleteNote, editNote } from './api'

function App() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    getAllNotes.then(res => setNotes(res))
  }, [])

  return (
    <div className="App">
      <header className="App-container">
        <div className="notes-container">

        </div>
      </header>
    </div>
  );
}

export default App;
