import Navigation from '../Navigation/Navigation';

function MobileNavigation(props){
    return(
        (
            <div className='nav__mobile'>
                <div className='nav__mobile-container'>
                <button className="nav__close-btn" ></button>
                    <Navigation />

                </div>
            </div>
        )
    )
}

export default MobileNavigation;