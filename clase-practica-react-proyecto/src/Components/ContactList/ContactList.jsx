import React from 'react'
import ContactCards from '../ContactCards/ContactCards'

const ContactList = ({dataMook}) => {

    return (
        <div>
            {
                dataMook.map((contacts) => {
                    return (
                        <ContactCards contactData={contacts} key={contacts.id} />
                    )
                })
            }
        </div>
    )
}

export default ContactList
