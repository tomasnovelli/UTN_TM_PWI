import React, { useState } from 'react'
import { createContext, useContext } from 'react'
import { v4 as uuid } from 'uuid'
import { obtenerHistorial } from '../Helpers/chatData'
const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {

    const [historialChat, setHistorialChat] = useState(obtenerHistorial())


    const initialState = {
        text: ''
    }
    const [messageInput, setMessageInput] = useState(initialState)

    const handleChangeContentValue = (e) => {
        const valueToChange = e.target.name
        const newValue = e.target.value
        setMessageInput({ ...messageInput, [valueToChange]: newValue})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const formulario = e.target
        const nuevoMensaje = {
            author: 'Yo',
            text: formulario.text.value,
            state: 'entregado',
            date: '13:52',
            id: ''
        }
        nuevoMensaje.id = uuid()
    }

    return (
        <div>
            <GlobalContext.Provider value={
                {
                    messageInput: messageInput,
                    historialChat: historialChat,
                    handleChangeContentValue: handleChangeContentValue,
                    handleSubmit: handleSubmit
                }
            }>
                {children}
            </GlobalContext.Provider>
        </div>
    )
}

export const useGlobalContext = () => {

    return useContext(GlobalContext)

}


