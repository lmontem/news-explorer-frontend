
import React, {useState} from 'react';
import { Route, Switch, useLocation} from 'react-router-dom';
import Main from '../Main/Main.js';
import SavedNews from '../SavedNews/SavedNews.js';
import Header from '../Header/Header';
import NewsCardList from '../NewsCardList/NewsCardList.js';
import About from '../About/About.js';
import Footer from '../Footer/Footer.js';
import './App.css';
import RegisterPopup from '../RegisterPopup/RegisterPopup.js';


function App() {
 // const[isRegisterPopupOpen, setRegisterPopupOpen] = useState(false);
  const location = useLocation();
  const savedNewsLocation = location.pathname === '/saved-news';
  /*function handleRegisterClick(){
    setRegisterPopupOpen(true);
  }*/
  return (
  (<>
    <div className="page">
      <Header 
      savedNewsLocation={savedNewsLocation}
      />
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/saved-news'>
          <SavedNews />
        </Route>
      </Switch>
      
          
      <NewsCardList />
      <About />
      <Footer />
      <RegisterPopup
      // isOpen={isRegisterPopupOpen}
       />
    </div>
    </>
  )
  );
}

export default App;
