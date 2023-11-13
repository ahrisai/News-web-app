import headerStyles from './Header.module.css'
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