import React from 'react'
import Layout from './Components/Pages/Chat/Chat'
import { Route, Routes } from 'react-router-dom'
import Contacts from './Components/Pages/Contacts/Contacts'
import Chat from './Components/Pages/Chat/Chat'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Contacts />} />
        <Route path='/chat/:contac_id' element={<Chat />}/>
      </Routes>
    </>
  )
}

export default App
