import Navigation from '../Navigation/Navigation';

function MobileNavigation(props) {


    return (
        (
            <div className={`nav__mobile nav__mobile-${props.mobileNavOpen ? "" : "hidden"}`}>
                <div className='nav__mobile-container'>
                <button className="nav__close-btn" onClick={props.onClose}></button>
                    <Navigation 
                    onSigninClick={props.onSigninClick}/>
                    
                </div>
            </div>
        )
    )
}

export default MobileNavigation;