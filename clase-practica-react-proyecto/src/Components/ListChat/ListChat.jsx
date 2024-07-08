import React from 'react'
import Chat from '../Chat/Chat'
import './listChat.css'

const ListChat = ({dataMook}) => {

    return (
        <div className='chat-container'>
            {
                dataMook.map((chat) => <Chat 
                    author={chat.author} 
                    content={chat.content} 
                    fecha={chat.fecha} 
                    estado={chat.estado} 
                    key={chat.id}
                    />)
            }
        </div>
    )
}

export default ListChat
