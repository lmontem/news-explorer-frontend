import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

function MobileNavigation(props) {


    return (
        (
            <div className={`nav__mobile nav__mobile-${props.mobileNavOpen ? "null" : "hidden"}`}>
                <div className='nav__mobile-container'>
                    <div className='nav__mobile-header'>
                        <Link className={`header__logo header__logo_${props.savedNewsLocation ? 'black' : 'null'}`} to='/' >NewsExplorer</Link>
                        <button className="nav__close-btn" onClick={props.onClose}></button>
                    </div>
                    <Navigation
                        onSigninClick={props.onSigninClick}
                        mobile={props.mobile}
                        loggedin={props.loggedin}
                        onSignOut={props.onSignOut}
                    />

                </div>
            </div>
        )
    )
}

export default MobileNavigation;