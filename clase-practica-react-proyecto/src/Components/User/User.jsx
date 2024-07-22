import React from 'react'
import './user.css'

const User = ({userName, userImg}) => {
  return (
    <div className='userInfo'>
                <div className='imgContainer'>
                <img className='userImg' src={userImg} alt={userName + 'Img'} />
                </div>
                <span className='userName'>{userName}</span>
    </div>
  )
}

export default User
