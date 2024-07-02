import React from "react"
import ColorCardList from "./Components/ColorCardList/ColorCardList"
import ColorsPalletList from "./Components/ColorsPalletList/ColorsPalletList"

function App() {

  const cardsInfo = [
    {
        colors: ['#DCA47C', '#FFD3B6', '#cf7f1d', '#698474'],
        likes: 83,
        date: '14 hours'
    },
    {
        colors: ['#4A249D', '#009FBD', '#F9E2AF', '#b91111c2'],
        likes: 87,
        date: 'Yesterday'
    },
    {
        colors: ['#FAFFAF', '#96C9F4', '#3FA2F6', '#0F67B1'],
        likes: 164,
        date: '2 Days'
    }
]

    return (
        <div>
          <ColorCardList arrayCards={cardsInfo} />
        </div>
    )
}

export default App
