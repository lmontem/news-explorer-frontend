function Navigation(props) {
    return (
        (
            <nav className= 'nav'>
                <a className='nav-text' href='home'>Home</a> {/*need to have underline on border when on page(home or saved artiles) */}
                <a className='nav-text' href='saved'>Saved articles</a> {/*need only when user is signed in */}
                <button className='nav-btn nav-text'>Sign in</button> {/*changes to user name when user is signed in */}
            </nav>
        )
    )
}

export default Navigation;