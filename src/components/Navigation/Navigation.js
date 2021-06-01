function Navigation(props) {
    return (
        (
            <nav className= 'nav'>
                <a className='nav__text' href='home'>Home</a> {/*need to have underline on border when on page(home or saved artiles) */}
                <a className='nav__text' href='saved'>Saved articles</a> {/*need only when user is signed in */}
                <button className='nav__btn nav__text'>Sign in</button> {/*changes to user name when user is signed in */}
            </nav>
        )
    )
}

export default Navigation;