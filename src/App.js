import React, { useEffect, useState } from 'react'
import './App.css'
import { getAllNotes, deleteNote, editNote } from './api'
import { NoteList, NoteForm } from './components'

function App() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    getAllNotes.then(res => setNotes(res))
  }, [])

  return (
    <div className="App">
      <header className="App-container">
        <div className="notes-container">
          <NoteForm notes={notes} setNotes={setNotes} />
        </div>
      </header>
    </div>
  );
}

export default App;
