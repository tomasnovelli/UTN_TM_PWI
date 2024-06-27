import React from "react"
import Button from "./Components/Button"
import RowInfo from "./Components/RowInfo"
import Cards from "./Components/Cards/Cards"

function App() {
const cardsContent = [
  {
      colors: ['#000000', '#FF4191', '#E90074', '#FFF078'],
      likes: 50,
      fecha: '13 hours'
  },
  {
      colors: ['#000000', '#FF4191', '#E90074', '#FFF078'],
      likes: 50,
      fecha: '13 hours'
  }
]
  return (
    <div>

        <RowInfo title='Icon font'>
            <p>Using the web font? copy. paste. and go</p>
        </RowInfo>
        <RowInfo title='Code point'>
            <span>Unicode: U+F61F</span>
            <br />
            <span>CSS: \F61F</span>
            <br />
            <span>JS: \uF61F</span>
            <br />
            <span>HTML: &#xF61F</span>
        </RowInfo>
        <RowInfo title='Copy HTML'>
          <p>Paste the SVG right into your project's code.</p>
        </RowInfo>

      

    </div>
  )
}

export default App
