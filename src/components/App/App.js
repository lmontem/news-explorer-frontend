
import React, { useState } from 'react';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import Main from '../Main/Main.js';
import SavedNews from '../SavedNews/SavedNews.js';
import Header from '../Header/Header';
import NewsCardList from '../NewsCardList/NewsCardList.js';
import About from '../About/About.js';
import Footer from '../Footer/Footer.js';
import './App.css';
import RegisterPopup from '../RegisterPopup/RegisterPopup.js';
import LoginPopup from '../LoginPopup/LoginPopup.js';
import ConfirmationPopup from '../ConfirmationPopup/ConfirmationPopup';
import {smallscreen} from '../../utils/constants.js';

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
  const history= useHistory();
  React.useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    windowWidth < smallscreen ? setMobile(true) : setMobile(false);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [windowWidth]);

  function handleRegisterLinkClick() {
    setRegisterPopupOpen(true);
    setLoginPopupOpen(false);
  }
  function handleSignInClick() {    
    setLoginPopupOpen(true);
    setRegisterPopupOpen(false);
    setMobileNavOpen(false);
  }
  function handleSignup(e){
    e.preventDefault();
    setConfirmationPopupOpen(true);
    setRegisterPopupOpen(false);
  }
  
  function closeAllPopups(){
    setRegisterPopupOpen(false);
    setLoginPopupOpen(false);
    setConfirmationPopupOpen(false);
  }
  
  function handleHamburgerClick() {
    setMobileNavOpen(true);
  }

  function handleMobileNavClose() {
    setMobileNavOpen(false);
  }

  function handleSignIn(e){ 
    e.preventDefault();
    setLoggedin(true);   
    history.push('/saved-news');
    closeAllPopups();   
  }

  function handleSignOut(e){
    e.preventDefault();
    setLoggedin(false);
    history.push('/');
  }

  return (
    (<>
      <div className="page">
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
            
            />
          </Route>
          <Route path='/saved-news'>
            <SavedNews
            />
          </Route>
        </Switch>

        <NewsCardList
          loggedin={loggedin}
          savedNewsLocation={savedNewsLocation} />
        <About />
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
      </div>
    </>
    )
  );
}

export default App;
