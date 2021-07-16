import React from 'react';
import { NavLink } from 'react-router-dom';
import signout from '../../images/sign-out.svg';
import signoutwhite from '../../images/sign-out-white.svg';
import { CurrentUserContext } from '../../context/CurrentUserContext';
function Navigation(props) {

    const isMobile = props.mobile ? "mobile" : "null";
    const currentUser = React.useContext(CurrentUserContext)
    //console.log(currentUser);
    return (
        (
            <nav className={`nav_${isMobile} nav`}>
                <NavLink className={`nav__text nav__text_home nav__text_${props.savedNewsLocation ? 'black' : 'null'}`} activeClassName='nav__text_active' exact to='/'>Home</NavLink>
                {props.loggedin ?
                    (<NavLink className={`nav__text nav__text_saved nav__text_${props.savedNewsLocation ? 'black' : 'null'}`} activeClassName='nav__text_active nav__text_active-black' exact to='/saved-news'>
                        Saved articles</NavLink>) : null}
                    {!props.loggedin ? (
                        <button onClick={props.onSigninClick}
                        className={` nav__btn nav__text nav__btn_${props.savedNewsLocation ? 'black' : 'null'} nav__text_${props.savedNewsLocation ? 'black' : 'null'}`}>
                            Sign in</button>
                    ): (
                    <button onClick={props.onSignOut}
                    className={` nav__btn nav__text nav__btn_${props.savedNewsLocation ? 'black' : 'null'} nav__text_${props.savedNewsLocation ? 'black' : 'null'}`}>
                       <span className='nav__btn-username'>{currentUser && currentUser.username}</span> 
                        <img src={props.savedNewsLocation ? signout : signoutwhite}
                        className='nav__signout'alt='signout' />
                    </button>)}
               
            </nav>

        )
    )
}


export default Navigation;