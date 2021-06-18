import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

function MobileNavigation(props) {


    return (
        (
            <div className={`nav__mobile nav__mobile-${props.mobileNavOpen ? "" : "hidden"}`}>
                <div className='nav__mobile-container'>
                    <div className='nav__mobile-header'>
                        <Link className={`header__logo header__logo_${props.savedNewsLocation ? 'black' : ''}`} to='/' >NewsExplorer</Link>
                        <button className="nav__close-btn" onClick={props.onClose}></button>
                    </div>
                    <Navigation
                        onSigninClick={props.onSigninClick}
                        mobile={props.mobile}
                    />

                </div>
            </div>
        )
    )
}

export default MobileNavigation;