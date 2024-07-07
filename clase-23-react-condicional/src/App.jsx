import React from 'react'
import NavBar from './components/NavBar'
import {userData, dataLenguaje} from './data'
function App() {


  return (
    <>
      <NavBar userData={userData} lenguaje={dataLenguaje}/>
    </>
  )
}

export default App
