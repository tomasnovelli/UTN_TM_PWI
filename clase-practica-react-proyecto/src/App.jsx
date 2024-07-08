import React from 'react'
import ListChat from './Components/ListChat/ListChat'
import { DATA_MOOK } from './Components/data' 

function App() {

  return (
    <div>
      <ListChat dataMook={DATA_MOOK}/>
    </div>

  )
}

export default App
