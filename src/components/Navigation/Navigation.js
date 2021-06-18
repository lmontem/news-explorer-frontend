import { Link } from 'react-router-dom';

function Navigation(props) {
    
    const isMobile = props.mobile ? "mobile" : "";

    return (
        (
            <nav className={`nav_${isMobile} nav`}>
                    <Link className={`nav__text nav__text_${props.savedNewsLocation ? 'black' : ''}`} exact to='/'>Home</Link> {/*need to have underline on border when on page(home or saved artiles) */}
                    <Link className={`nav__text nav__text_${props.savedNewsLocation ? 'black' : ''}`} exact to='/saved-news'>Saved articles</Link> {/*need only when user is signed in */}
                    <button onClick={props.onSigninClick}
                        className={` nav__btn nav__text nav__text_${props.savedNewsLocation ? 'black' : ''}`}>Sign in</button> {/*changes to user name when user is signed in */}
            </nav>

        )
    )
}


export default Navigation;