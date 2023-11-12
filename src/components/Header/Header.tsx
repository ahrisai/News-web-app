import React, {useState, useEffect} from 'react'
import headerStyles from './Header.module.css'
import { formatDate } from '../../utility/formatDate'
import DateTime from '../Date/Date'



const Header = () => {
    
    

  return (
    <header className={headerStyles.header}>
        <h1 className={headerStyles.title}>FastNews</h1>
        <DateTime/>
    </header>
  )
}

export default Header