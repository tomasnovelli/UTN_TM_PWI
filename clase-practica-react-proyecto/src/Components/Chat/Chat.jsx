import React from 'react'
import './chat.css'
const Chat = ({ author, content, fecha, estado }) => {

    return (
        <>
            <div className='chatBox'>
                <span>{author}</span>
                <p>{content}</p>
                <span>{fecha}</span>
                <span>{estado}</span>
            </div>
        </>
    )
}

export default Chat
