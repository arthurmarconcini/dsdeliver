import './styles.css';
import { ReactComponent as Logo } from './parceria-logo.svg'
import { Link } from 'react-router-dom';

function Navbar(){
    return (
        <nav className="main-navbar">
            <Logo />
            <Link to="home" className="logo-text">Parceria's Burger and Pizza</Link>
        </nav>
    )    
}

export default Navbar;
