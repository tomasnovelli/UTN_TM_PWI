import React from 'react'
import './styleNavBar.css'
/**
 * Component NavBar
 * This component displays a navigation bar with a logo, Home, Login button (if user is not logged), and Create Product button (if user is admin).
 * @param {Object} props - The properties that the component receives.
 * @property {Object} props.userData - The user data.
 * @property {boolean} props.userData.isLogged - A boolean indicating if the user is logged.
 * @property {boolean} props.userData.isAdmin - A boolean indicating if the user is admin.
 * @property {string} props.userData.lang - The language of the user.
 * @property {Object} props.lenguaje - The data of the language.
 * @returns {JSX.Element} - The component.
 */
const NavBar = (props) => {
    const isLogged = props.userData.isLogged
    const isAdmin = props.userData.isAdmin
    const lang = props.userData.lang
    const data = props.lenguaje

    // Get the data of the language selected by the user
    const dataSelected = data[lang]
    
    return (
        <div className='navBar'>
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
        </div>
    )
}

export default NavBar
