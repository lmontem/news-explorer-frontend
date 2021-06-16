import { Link } from 'react-router-dom';

function Navigation(props) {
    

    /*function toggleMenu(){
        const menu = document.querySelector('nav');
        console.log(menu);
        menu.classList.toggle("responsive");
    }*/

    return (
        (
            <nav className='nav'>
                    <Link className={`nav__text nav__text_${props.savedNewsLocation ? 'black' : ''}`} exact to='/'>Home</Link> {/*need to have underline on border when on page(home or saved artiles) */}
                    <Link className={`nav__text nav__text_${props.savedNewsLocation ? 'black' : ''}`} exact to='/saved-news'>Saved articles</Link> {/*need only when user is signed in */}
                    <button onClick={props.onSigninClick}
                        className={` nav__btn nav__text nav__text_${props.savedNewsLocation ? 'black' : ''}`}>Sign in</button> {/*changes to user name when user is signed in */}
                    <button 
                        className="nav__menu-btn">
                    </button>
            </nav>

        )
    )
}


export default Navigation;