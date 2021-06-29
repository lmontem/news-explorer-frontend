
import React, { useState } from 'react';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import { newsApi } from '../../utils/NewsApi';
import Main from '../Main/Main.js';
import SavedNews from '../SavedNews/SavedNews.js';
import Header from '../Header/Header';
import Footer from '../Footer/Footer.js';
import './App.css';
import RegisterPopup from '../RegisterPopup/RegisterPopup.js';
import LoginPopup from '../LoginPopup/LoginPopup.js';
import ConfirmationPopup from '../ConfirmationPopup/ConfirmationPopup';
import { smallscreen } from '../../utils/constants.js';
import { CurrentUserContext } from '../../context/CurrentUserContext';


function App() {
  const [isRegisterPopupOpen, setRegisterPopupOpen] = useState(false);
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const [isConfirmationPopupOpen, setConfirmationPopupOpen] = useState(false);
  const location = useLocation();
  const savedNewsLocation = location.pathname === '/saved-news';
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [isMobile, setMobile] = React.useState(false);
  const [isMobileNavOpen, setMobileNavOpen] = React.useState(false);
  const [loggedin, setLoggedin] = useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [searchWord, setSearchWord] = useState('');
  const [results, setResults] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [showPreloader, setShowPreloader] = useState(false);
  const [cards, setCards] = React.useState([]);
  const [numCardsShown, setNumCardsShown] = useState(3);
  const [savedCards, setSavedCards] = React.useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  //determines size of window so mobile nav can be set
  React.useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    windowWidth < smallscreen ? setMobile(true) : setMobile(false);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [windowWidth]);

 React.useEffect(() => {
    if (localStorage.getItem('searchResults')) {
      setCards(JSON.parse(localStorage.getItem('searchResults')));
    }
    if (localStorage.getItem('savedCards')) {
      setSavedCards(JSON.parse(localStorage.getItem('savedCards')));
    }
  }, []);

  //opens sign up form upon sign up link click
  function handleRegisterLinkClick() {
    setRegisterPopupOpen(true);
    setLoginPopupOpen(false);
  }
  //opens sign in form upon signin link/btn click
  function handleSignInClick() {
    setLoginPopupOpen(true);
    setRegisterPopupOpen(false);
    setMobileNavOpen(false);
  }
  //confirms sign up success
  function handleSignup(e) {
    e.preventDefault();
    setConfirmationPopupOpen(true);
    setRegisterPopupOpen(false);
  }
  //closes all popups
  function closeAllPopups() {
    setRegisterPopupOpen(false);
    setLoginPopupOpen(false);
    setConfirmationPopupOpen(false);
  }
  //opens mobile nav upon hamburger menu click
  function handleHamburgerClick() {
    setMobileNavOpen(true);
  }
  //closes mobile nav upon close btn click
  function handleMobileNavClose() {
    setMobileNavOpen(false);
  }
  //handles sign in 
  function handleSignIn(e) {
    e.preventDefault();
    setLoggedin(true);
    history.push('/saved-news');
    closeAllPopups();
  }
  //handles sign out
  function handleSignOut(e) {
    e.preventDefault();
    setLoggedin(false);
    history.push('/');
  }

  //shows more cards
  function handleShowMoreCards() {
    setNumCardsShown(numCardsShown + 3);
  }
  

  //handles submit of search form
  function handleSearchSubmit(e) {
    e.preventDefault();
    setShowPreloader(true);
    if (searchWord.length === 0) {
      setShowPreloader(false);
      setErrorMessage('Please enter a keyword');
      return
    }
    newsApi.getNewsCards(searchWord)
      .then((data) => {
        if (data.length === 0) {
          setNotFound(true);
        }
       
        return data;
      })
      .then((cards) => {
        setNumCardsShown(3);
        setCards(cards);
        setResults(true);
        setShowPreloader(false);
        setErrorMessage('');
      })
      .catch(() => {
        setErrorMessage("Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later.")
        setShowPreloader(false);
      })

  }
  return (
    (<>
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Header
            savedNewsLocation={savedNewsLocation}
            onSigninClick={handleSignInClick}
            onSignOut={handleSignOut}
            mobile={isMobile}
            mobileNavOpen={isMobileNavOpen}
            onHamburgerClick={handleHamburgerClick}
            onClose={handleMobileNavClose}
            loggedin={loggedin}

          />
          <Switch>
            <Route exact path='/'>
              <Main
                loggedin={loggedin}
                savedNewsLocation={savedNewsLocation}
                handleSearchSubmit={handleSearchSubmit}
                errorMessage={errorMessage}
                searchWord={searchWord}
                setSearchWord={setSearchWord}
                results={results}
                notFound={notFound}
                showPreloader={showPreloader}
                cards={cards}
                handleShowMoreCards={handleShowMoreCards}
                numCardsShown={numCardsShown}
              />
            </Route>
            <Route path='/saved-news'>
              <SavedNews
                loggedin={loggedin}
                savedNewsLocation={savedNewsLocation}
                cards={savedCards}
                searchWord={searchWord}
              />
            </Route>
          </Switch>
          <Footer />
          <LoginPopup
            onSignupClick={handleRegisterLinkClick}
            onClose={closeAllPopups}
            isOpen={isLoginPopupOpen}
            onSubmit={handleSignIn}
          />
          <RegisterPopup
            onSigninClick={handleSignInClick}
            onClose={closeAllPopups}
            isOpen={isRegisterPopupOpen}
            onSubmit={handleSignup}
          />
          <ConfirmationPopup
            onSigninClick={handleSignInClick}
            onClose={closeAllPopups}
            isOpen={isConfirmationPopupOpen}
          />
        </CurrentUserContext.Provider>
      </div>
    </>
    )
  );
}

export default App;
