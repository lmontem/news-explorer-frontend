
import React, {useState} from 'react';
import { Route, Switch} from 'react-router-dom';
import Main from '../Main/Main.js';
import SavedNews from '../SavedNews/SavedNews.js';
import Header from '../Header/Header.js';
import NothingFound from '../NothingFound/NothingFound.js';
import Preloader from '../Preloader/Preloader.js';
import NewsCardList from '../NewsCardList/NewsCardList.js';
import About from '../About/About.js';
import Footer from '../Footer/Footer.js';
import './App.css';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader.js';
import RegisterPopup from '../RegisterPopup/RegisterPopup.js';


function App() {
  const[isRegisterPopupOpen, setRegisterPopupOpen] = useState(false);

  function handleRegisterClick(){
    setRegisterPopupOpen(true);
  }
  return (
  (<>
    <div className="page">
      
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route exact path='/saved-news'>
          <SavedNews />
        </Route>
      </Switch>
      
          
      <NewsCardList />
      <About />
      <Footer />
      <RegisterPopup
       isOpen={isRegisterPopupOpen} />
    </div>
    </>
  )
  );
}

export default App;
