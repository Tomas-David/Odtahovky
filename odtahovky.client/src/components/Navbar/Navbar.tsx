//React
import { Link } from 'react-router-dom';

//Assets
import logo  from '../../assets/logo.svg';

//CSS
import classes from './Navbar.module.css';

//Ikony
import { FiMenu } from "react-icons/fi";
import { FiUser } from "react-icons/fi";




//Navigace stránky
const Navbar: React.FC = () => {
    return (
        <nav className={classes.nav}>
            <img src={logo} alt="Logo" />
            <menu className={classes.menu}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/services">Služby</Link>
                </li>
                <li>
                    <Link to="/prices">Ceník</Link>
                </li>
                <li>
                    <Link to="/about">O nás</Link>
                </li>
                <li>
                    <Link to="/contact">Kontakt</Link>
                </li>
            </menu>
            <div className={classes.icon_menu}>
                <button className={classes.button}>{<FiUser  className={classes.icon} />}</button>
                <button className={classes.button}>{<FiMenu  className={classes.icon} />}</button>
            </div>
        </nav>
    );
}

export default Navbar;