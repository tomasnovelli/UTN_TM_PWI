import React from 'react'
import { Link } from 'react-router-dom'

const ContactCards = ({contactData}) => {

    const {
        nombre,
        thumbnail,
        ultima_conexion,
        id,
        mensajes
    } = contactData

    return (
        <Link to={'/chat/' + id}>
            <img className={'img_' + nombre.toLowerCase()} src={thumbnail} alt="" width={35}/>
            <span>{nombre}</span>
            <span>{mensajes.length}</span>
            <span>{ultima_conexion}</span>
        </Link>
    )
}

export default ContactCards
