import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';


function Header(props) {
    return(
        (
            <header className= 'header'>
                <Link className={`header__logo header__logo_${props.savedNewsLocation  ? 'black' : ''}`} to= '/' >NewsExplorer</Link>
                <Navigation
                 savedNewsLocation={props.savedNewsLocation}/>
            </header>
        )
    )
}

export default Header;