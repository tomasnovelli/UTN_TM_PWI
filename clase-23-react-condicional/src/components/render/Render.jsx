import React from 'react'
import './render.css'

const Render = ({isLogged, isAdmin, lang, lenguaje}) => {

    const dataSelected = lenguaje[lang]

    return (
        <>
            <span className='logo'>Logo</span>
            <div className='buttons'>
                <a href='#' className='home'>{dataSelected.home}</a>
                {
                    // If user is not logged, show a Login button
                    !isLogged && <button className='btn-login'>{dataSelected.loguear}</button>
                }
                {
                    // If user is admin, show a Create Product button
                    isAdmin && <button className='btn-create'>{dataSelected.create}</button>
                }
            </div>
        </>
    )
}

export default Render
