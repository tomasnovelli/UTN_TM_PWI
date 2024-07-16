import React from 'react'
import ColorsPalletList from '../ColorsPalletList/ColorsPalletList'
import './ColorCardsListStyle.css'
import '../ColorsPalletList/ColorsPalletStyle.css'

const ColorCardList = (props, id) => {
   
    return (
        <div className='card-container'>
                {
                    props.arrayCards.map((info) => {
                        return(
                            <div className='card'>  
                            <div className='color-container'>
                                <ColorsPalletList key={id} colors={info.colors}/> 
                            </div>
                            <div className='footer-card'>
                                <button className='btn-likes'><i className="bi bi-heart"></i>{info.likes}</button>
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