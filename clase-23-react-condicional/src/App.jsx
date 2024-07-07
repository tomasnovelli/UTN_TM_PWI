import React from 'react'
import NavBar from './components/NavBar/NavBar'
import {dataLenguaje, userData} from './data'


function App() {

  return (
    <>
      <NavBar userData={userData} lenguaje={dataLenguaje}/>
    </>
  )
}

export default App
