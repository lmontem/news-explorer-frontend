
import React, { useState, useCallback } from 'react';
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
import { smallscreen, token } from '../../utils/constants.js';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { mainApi } from '../../utils/MainApi';



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
  const [values, setValues] = React.useState({ email: '', password: '', username: '' });
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const [signinBtnDisabled, setSigninBtnDisabled] = React.useState(false);
  const history = useHistory();

  //determines size of window so mobile nav can be set
  React.useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    windowWidth < smallscreen ? setMobile(true) : setMobile(false);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [windowWidth]);

  /* React.useEffect(() => {
     if (token) {
       mainApi
       .getUserInfo(token)
         .then((data) => {
           if (data) {
             console.log(data);
             setLoggedin(true);
             setCurrentUser({
               email: data.email,
               name: data.name,
             });
           }
         })
         .catch((err) => console.log(err));
     } else {
       setLoggedin(false);
     }
   }, []);*/
   React.useEffect(() => {
    //debugger;
    handleCheckToken();
}, []);

  React.useEffect(() => {
    if (token) {
      mainApi
        .getUserInfo(token)
        .then((res) => {
          setCurrentUser(res);
          findSavedArticles(token);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  React.useEffect(() => {
    if (localStorage.getItem('searchResults')) {
      setCards(JSON.parse(localStorage.getItem('searchResults')));
    }
    if (localStorage.getItem('savedCards')) {
      setSavedCards(JSON.parse(localStorage.getItem('savedCards')));
    }
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    const newValues = {
      ...values,
      [name]: value,
    };
    setValues(newValues);
    setErrors({ ...errors, [name]: errors[name] });
    setIsValid(e.target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (
      newValues = { email: '', password: '', username: '' },
      newErrors = { email: '', password: '', username: '' },
      newIsValid = false,
    ) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid],
  );

  //opens sign up form upon sign up link click
  function handleRegisterLinkClick() {
    setRegisterPopupOpen(true);
    setLoginPopupOpen(false);
    setSigninBtnDisabled(true);
  }
  //opens sign in form upon signin link/btn click
  function handleSignInClick() {
    setLoginPopupOpen(true);
    setRegisterPopupOpen(false);
    setMobileNavOpen(false);
    setConfirmationPopupOpen(false);
  }
  //confirms sign up success
  function handleSignup(e) {
    e.preventDefault();

    mainApi
      .register(values.email, values.password, values.username)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(() => {
        setConfirmationPopupOpen(true);
        setRegisterPopupOpen(false);
        resetForm();
      })
      .catch(err => console.log(err));
  }


  //closes all popups
  function closeAllPopups() {
    setRegisterPopupOpen(false);
    setLoginPopupOpen(false);
    resetForm();
    setSigninBtnDisabled(false);
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
    mainApi
      .login(values.email, values.password)
      .then(res => {
        console.log('what up bags');
        handleCheckToken();
        window.location.reload();
        if (res.ok) {
          console.log(res);
          return res.json();
        }

        if (!res.token) {
          setErrors((prevState) => ({
            ...prevState,
            result: res.message,
          }));

          throw new Error(res.message);
        }

      })
      .then(() => {
        console.log('I am clicked');
        setLoggedin(true);
        closeAllPopups();
        resetForm();
        history.push('/');
      })
      .catch(res => {
        if (res === 400) {
          console.log('one of the fields was filled in in correctly')
        }
        if (res === 401) {
          console.log('user email not found')
        }
      })
  }

  function handleCheckToken() {
    const jwt = localStorage.getItem('jwt')
    if (jwt) {
      mainApi
        .checkToken(jwt)
        .then(res => {
          if (res) {
            setValues({ email: res.email, username: res.username });
            setLoggedin(true);
            history.push('/')
          }
        }
        )
        .catch(err => console.log(err))
    }
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
  //handles saving articles
  function handleSaveArticleClick(card) {
    if (!loggedin) {
      return handleSignInClick();
    }
    if (!savedNewsLocation && loggedin) {
      card.keyword = searchWord;
      card.source = card.source.name;
        console.log(card);
        //console.log(searchWord);
        mainApi.saveArticle(card)
          .then((newCard) => {
            newCard.isSaved = true;
            const newCards = cards.map((c) => c === card ? newCard : c);
            const newSavedCards = [...savedCards, newCard];
            setSavedCards(newSavedCards);
            setCards(newCards);
          })
          .catch(err => console.log("Error: " + err));
          
    }
    else {
      handleArticleDelete(card);
    }
  }

  //handles deleting article
  function handleArticleDelete(article) {
    mainApi.removeArticle(article._id, token)
      .then(() => {
        const newSavedCards = savedCards.filter((c) => c._id !== article._id);
        setSavedCards(newSavedCards);
        const newCards = cards.map((c) => (c._id === article._id ? article : c));
        setCards(newCards);
      })
      .catch(err => console.log("Error: " + err));
  }

  //get articles
  function findSavedArticles(token) {
    mainApi
      .getArticles(token)
      .then((res) => {
        setSavedCards(res);
      })
      .catch((error) => console.log(error));
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
                handleSaveArticleClick={ (card) => { handleSaveArticleClick(card) }}
              />
            </Route>
            <Route path='/saved-news'>
              <SavedNews
                loggedin={loggedin}
                savedNewsLocation={savedNewsLocation}
                cards={savedCards}
                searchWord={searchWord}
                onDelete={handleArticleDelete}
                handleSaveArticleClick={ (card) => { handleSaveArticleClick(card) }}
              />
            </Route>
          </Switch>
          <Footer />
          <LoginPopup
            onSignupClick={handleRegisterLinkClick}
            onClose={closeAllPopups}
            isOpen={isLoginPopupOpen}
            onSubmit={handleSignIn}
            handleFormChange={handleFormChange}
            values={values}
          />
          <RegisterPopup
            onSigninClick={handleSignInClick}
            onClose={closeAllPopups}
            isOpen={isRegisterPopupOpen}
            onSubmit={handleSignup}
            handleFormChange={handleFormChange}
            values={values}
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
