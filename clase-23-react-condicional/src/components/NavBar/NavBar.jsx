import React from 'react'
import './styleNavBar.css'
import Render from '../render/Render'

const NavBar = ({userData, lenguaje}) => {

    return (
        <div className='navBar'>
            <Render 
            isLogged={userData.isLogged} 
            isAdmin={userData.isAdmin} 
            lang={userData.lang} 
            lenguaje={lenguaje}
            />
        </div>
    )
}

export default NavBar
