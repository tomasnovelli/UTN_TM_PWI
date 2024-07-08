import React from 'react'
import './chat.css'
const Chat = ({ author, content, fecha, estado }) => {

    return (
        <>
            {
                author == 'Pepe'
                    ? <div className='pepeMessage'>
                        <span className='author'>{author}</span>
                        <p className='messageContent'>{content}</p>
                        <div className='footerMessage'>
                            <span className='date'>{fecha}</span>
                            {estado == 'visto'

                                ? <span className='checkSeen'><i class="bi bi-check-all"></i></span>
                                : <span className='checkDelivered'><i class="bi bi-check-all"></i></span>}

                        </div>
                    </div>

                    : <div className='yoMessage'>
                        <span className='author'>{author}</span>
                        <p className='messageContent'>{content}</p>
                        <div className='footerMessage'>
                            <span className='date'>{fecha}</span>
                            {estado == 'visto'

                                ? <span className='checkSeen'><i class="bi bi-check-all"></i></span>
                                : <span className='checkDelivered'><i class="bi bi-check-all"></i></span>

                            }
                        </div>
                    </div>
            }
        </>
    )
}

export default Chat
