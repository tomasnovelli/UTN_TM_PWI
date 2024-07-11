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
          
            <ListChat dataMook={DATA_MOOK}/>
        </main>

        <footer>
            <WrittingText />
        </footer>
    </body>
  )
}

export default Layout
