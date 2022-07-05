import React from 'react'
import './components/css/App.css'
import Header from './components/NoteComponents/Header'
import Notes from './components/NoteComponents/Notes'
const App = () => {
  return (
    <div className='main'>
        <Header/>
        <Notes/>
    </div>
  )
}

export default App