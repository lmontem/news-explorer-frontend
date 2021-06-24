import Navigation from '../Navigation/Navigation';
import MobileNavigation from '../MobileNavigation/MobileNavigation.js';
import { Link } from 'react-router-dom';


function Header(props) {
    return (
        (
            <header className='header'>
                <Link className={`header__logo header__logo_${props.savedNewsLocation ? 'black' : 'null'}`} to='/' >NewsExplorer</Link>
                {props.mobile ? (
                    <MobileNavigation
                        mobileNavOpen={props.mobileNavOpen}
                        onSigninClick={props.onSigninClick}
                        onClose={props.onClose}
                        mobile={props.mobile}
                        loggedin={props.loggedin}
                        onSignOut={props.onSignOut}
                    />
                ) : (
                    <Navigation
                        savedNewsLocation={props.savedNewsLocation}
                        onSigninClick={props.onSigninClick}
                        mobile={props.mobile}
                        mobileMenuOpen={props.mobileMenuOpen}
                        loggedin={props.loggedin}
                        onSignOut={props.onSignOut}
                    />
                )}
                {props.mobile && (
                    <button
                        className={`header__hamburger header__hamburger_${props.savedNewsLocation ? 'black' : 'null'} header__hamburger_${props.mobileNavOpen ? 'hidden' : 'null'}`}
                        onClick={props.onHamburgerClick}
                    ></button>
                        )}
            </header>
        )
    )
}

export default Header;