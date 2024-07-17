import React, { useState } from 'react'
import UserInfo from '../UserInfo/UserInfo'
import ListChat from '../ListChat/ListChat'
import WrittingText from '../WrittingText/WrittingText'
import { DATA_MOOK } from '../../Components/data'
import './layout.css'

const Layout = () => {

  const [newMessage, setNewMessage] = useState(DATA_MOOK)

  const handleSubmit = (e, messageInput) =>{
    e.preventDefault()
    setNewMessage([...newMessage, {author: messageInput.author, content: messageInput.content, fecha: 'hoy a 11:03', estado: 'entregado', id: 6 }])
  }

  return (
    <div className='body'>
        <header>
            <UserInfo />
        </header> 

        <main className='main'>
          
            <ListChat dataMook={newMessage}/>
        </main>

        <footer>
            <WrittingText handleSubmit={handleSubmit} />
        </footer>
    </div>
  )
}

export default Layout
