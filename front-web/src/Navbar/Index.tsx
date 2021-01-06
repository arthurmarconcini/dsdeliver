import './styles.css';
import { ReactComponent as Logo } from './parceria-logo.svg'
function Navbar(){
    return (
        <nav className="main-navbar">
            <Logo />
            <a href="home" className="logo-text">Parceria's Burger and Pizza</a>
        </nav>
    )    
}

export default Navbar;