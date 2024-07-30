import React from 'react'
import { DATA_CONTACTOS } from '../../dataMook'
import ContactList from '../../ContactList/ContactList'
import './contacts.css'
import { useGlobalContext } from '../../GlobalContext/GlobalContext'


const Contacts = () => {
    const {contactListData} = useGlobalContext()
    return (
        <div className='contacts'>
            <ContactList dataMock={contactListData}/>
        </div>
    )
}

export default Contacts
