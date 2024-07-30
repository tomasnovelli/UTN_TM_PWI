import React, { useState } from 'react'
import ListChat from '../../ListChat/ListChat'
import './chat.css'
import { useParams } from 'react-router-dom'
/* import { getContactDataById } from '../../Helpers/contacts' */
import User from '../../User/User'
import WrittingText from '../../WrittingText/WrittingText'
import { useGlobalContext } from '../../GlobalContext/GlobalContext'
import { obtenerHistorial } from '../../Helpers/chatData'

const Chat = () => {

  const { getContactDataById } = useGlobalContext()
  const params = useParams()
  const contactData = getContactDataById(params.contact_id)

  return (
    <div className='body'>
      <User userName={contactData.nombre} userImg={contactData.thumbnail} userConection={contactData.ultima_conexion} />
      <ListChat dataMessage={contactData.mensajes} />
      <WrittingText contactData={contactData} />
    </div>
  )
}

export default Chat
