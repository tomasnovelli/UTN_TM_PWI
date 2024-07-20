import React, { useState } from 'react'
import ListChat from '../../ListChat/ListChat'
import './chat.css'
import { useParams } from 'react-router-dom'
import { contactMessage } from '../../Helpers/contacts'

const Chat = () => {

const params = useParams()
const {mensajes} = contactMessage(params.contac_id)


/*   const [newMessage, setNewMessage] = useState(DATA_MOOK)

  const handleSubmit = (e, messageInput) =>{
    e.preventDefault()
    setNewMessage([...newMessage, {
                                    author: messageInput.author, 
                                    content: messageInput.content, 
                                    fecha: 'hoy a 11:03', 
                                    estado: 'entregado', 
                                    id: 6 
                                  }
                  ])
  } */

  return (
    
    <div className='body'>
      <ListChat dataMessage={mensajes}/>
    </div>
  )
}

export default Chat
