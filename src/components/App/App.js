
import React, { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
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


function App() {
  const [isRegisterPopupOpen, setRegisterPopupOpen] = useState(false);
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const [isConfirmationPopupOpen, setConfirmationPopupOpen] = useState(false);
  const location = useLocation();
  const savedNewsLocation = location.pathname === '/saved-news';
  function handleRegisterLinkClick() {
    setRegisterPopupOpen(true);
    setLoginPopupOpen(false);
  }
  function handleSignInClick() {
    setLoginPopupOpen(true);
    setRegisterPopupOpen(false);
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
  

  return (
    (<>
      <div className="page">
        <Header
          savedNewsLocation={savedNewsLocation}
          onSigninClick={handleSignInClick}
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
          savedNewsLocation={savedNewsLocation} />
        <About />
        <Footer />
        <LoginPopup
          onSignupClick={handleRegisterLinkClick}
          onClose={closeAllPopups}
          isOpen={isLoginPopupOpen}
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
