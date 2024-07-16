import React, { useState } from 'react'

const ColorCardForm = ({handleSubmit}) => {

    const formSchema = {
        colors: 4,
        time: 'timestamp'
    }

    const initialState = {
        time: '',
        color_1: '',
        color_2: '',
        color_3: '',
        color_4: ''
    }
    const [formValues, setFormValues] = useState(initialState)

    const handleChangeFormValue = (e) =>{
        const valueToChange = e.target.name
        const newValue = e.target.value
        setFormValues({...formValues, [valueToChange]: newValue})
    }

    const colorsInputs = []
    for(let i = 1; i <= formSchema.colors; i = i + 1){
        colorsInputs.push(
            <div Key={i}>
                <label htmlFor={'color_' + i}>Color {i}</label>
                <input name={'color_' + i} id={'color_' + i} type='text' onChange={handleChangeFormValue} value={formValues['color_' + i]}/>
            </div>
        )
    }
    
    return (
        <form onSubmit={(e) => handleSubmit(e, {...formValues})}>
            <h2>Crea tu carta de colores</h2>
            {colorsInputs}
            <div>
                <label htmlFor="time">Fecha</label>
                <input type={formSchema.time} name='time' id='time' onChange={handleChangeFormValue} value={formValues.time}/>
            </div>
            <button type='submit'>Enviar</button>
        </form>
    )
}

export default ColorCardForm
