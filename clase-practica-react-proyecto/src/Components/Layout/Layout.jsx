import React from 'react'
import UserInfo from '../UserInfo/UserInfo'
import ListChat from '../ListChat/ListChat'
import WrittingText from '../WrittingText/WrittingText'
import { DATA_MOOK } from '../../Components/data'
import './layout.css'
const Layout = () => {
  return (
    <body className='body'>
        <header>
            <UserInfo />
        </header> 

        <main>
            <img className='wspImg' src="https://i.pinimg.com/736x/3a/2e/99/3a2e99d16f179dae33e2c394be2229fb.jpg" alt="wsp" />
            <ListChat dataMook={DATA_MOOK}/>
        </main>

        <footer>
            <WrittingText />
        </footer>
    </body>
  )
}

export default Layout
