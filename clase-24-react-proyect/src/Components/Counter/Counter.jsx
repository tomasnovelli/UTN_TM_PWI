import React, { useState }  from 'react'

const Counter = ({ limit }) => {
    const [contador, setContador] = useState(0)

    const handleClickAddButton = () => {
        if (contador < limit) {
            setContador(contador + 1)
        }
    }

    const handleClickDecreaseButton = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }
    return (
        <div>
            <button disabled={contador === 0} onClick={ handleClickDecreaseButton }>-</button> 
            <span>{contador}</span>
            {contador >= limit
                ? <span>no se puede incrementar mas de {limit}</span>
                : <button onClick={ handleClickAddButton }>+</button>
            }
        </div>
    )
}

export default Counter
