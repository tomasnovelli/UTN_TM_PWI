import React from 'react'
import ColorsPalletList from '../ColorsPalletList/ColorsPalletList'

const ColorCardList = (props) => {
    return (
        <div>
            {
                props.arrayCards.map((info) => {
                    return(
                        <>
                            <ColorsPalletList colors={info.colors}/> 
                            <button>{info.likes}</button>
                            <span>{info.date}</span>
                        </>
                    )
                })
            }
        </div>
    )
}

export default ColorCardList
