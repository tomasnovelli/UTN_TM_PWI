import React from 'react'
import ColorsPalletList from '../ColorsPalletList/ColorsPalletList'
import './ColorCardsListStyle.css'

const ColorCardList = (props) => {
   
    return (
        <div className='card-container'>
                {
                    props.arrayCards.map((info) => {
                        return(
                            <div className='card'>  
                            <div className='color-container'>
                                <ColorsPalletList colors={info.colors}/> 
                            </div>
                            <div className='footer-card'>
                                <button className='btn-likes'>{info.likes}</button>
                                <span className='date'>{info.date}</span>
                            </div>
                            </div>
                        )
                    })
                }
        </div>
    )
}

export default ColorCardList
