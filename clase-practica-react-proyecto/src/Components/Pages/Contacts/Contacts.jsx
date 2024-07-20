import React from 'react'
import ContactList from './ContactList/ContactList'
import { DATA_CONTACTOS } from '../../dataMook'


const Contacts = () => {

    return (
        <div>
            <ContactList dataMook={DATA_CONTACTOS}/>
        </div>
    )
}

export default Contacts
