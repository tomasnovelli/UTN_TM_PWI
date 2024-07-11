import React from 'react'
import './writtingText.css'
const WrittingText = () => {
  return (
    <div className='writtingText'>
      <form action="">
        <label htmlFor="">escribir</label>
        <input type="text" />
        <button className='btn-submit' type="submit">Send</button>
      </form>
    </div>
  )
}

export default WrittingText
