import Navigation from '../Navigation/Navigation';

function Header(props) {
    return(
        (
            <header className= 'header'>
                <a className='header__logo' href='/'>NewsExplorer</a>
                <Navigation
                 />
            </header>
        )
    )
}

export default Header;