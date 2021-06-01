import Navigation from '../Navigation/Navigation';

function Header(props) {
    return(
        (
            <header className= 'header'>
                <p className='header__logo'>NewsExplorer</p>
                <Navigation />
            </header>
        )
    )
}

export default Header;