import React, { useState } from "react"
import ColorCardList from "./Components/ColorCardList/ColorCardList"
import './style.css'
import { cardsInfo } from './data'
import Counter from "./Components/Counter/Counter"
import ColorCardForm from "./Components/ColorCardForm/ColorCardForm"

function App() {

  const [cardsInfoNew, setCardsInfoNew] = useState(cardsInfo)

  const handleSubmit = (e, formValues) =>{
    e.preventDefault()
    console.log('enviado', formValues)
    const colors = []
    for(let i = 1; i <= 4; i = i + 1){
      colors.push(formValues['color_' + i])
    }
    setCardsInfoNew([...cardsInfoNew, {colors: colors, likes: 0, date: formValues.time, id: 5}])
  }
  
  return (
    <div>
      <ColorCardList key={cardsInfo.id} arrayCards={cardsInfoNew} />
      <Counter limit={10}/>
      <ColorCardForm handleSubmit={handleSubmit}/>
    </div>
  )
}

export default App
