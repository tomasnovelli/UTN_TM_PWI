import React, { useState } from 'react'
import './writtingText.css'

const WrittingText = ({handleSubmit}) => {

  const initialState = {
    author: 'Yo',
    content: ''
  }
  const [messageInput, setMessageInput] = useState(initialState)

  const handleChangeContentValue = (e) =>{
    const valueToChange = e.target.name
    const newValue = e.target.value
    setMessageInput({...messageInput, [valueToChange]: newValue})
  }

  return (

    <div className='writtingText'>
      <form className='form' onSubmit={(e) => handleSubmit(e, {...messageInput}) }>
        <label htmlFor="text_input"></label>
        <div className='textArea'>
        <i className="bi bi-emoji-smile smileFace"></i>
        <input className='textInput' placeholder='Mensaje' type="text" name='content' id='content' onChange={handleChangeContentValue} value={messageInput.content} />
        <i class="bi bi-paperclip"></i>
        <i class="bi bi-camera"></i>
        </div>
        <button className='btn-submit' type="submit"><i className="bi bi-send-fill"></i></button>
      </form>
    </div>

  )
}

export default WrittingText
