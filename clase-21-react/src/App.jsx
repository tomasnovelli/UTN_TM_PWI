import React from 'react'
import {nombre, persona} from './funciones'
import {Button} from './components/Boton'
import Carta from './components/Carta'


function App() {
let nombreUsuario = 'julieta'
const obtenerRandom = () => 'dato random'
  return (
    <>
    <div>
      <h1>Hola {nombreUsuario}</h1>
      <Button
        text={'tu hermana'}
      />
      <Carta />
    </div>
    <div>
      <h1>Hola {obtenerRandom()}</h1>
      <Button 
        text={'boton 1'}
      />
      <Carta />
    </div>
    </>
  )
}

export default App

