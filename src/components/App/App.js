
import React, {useState} from 'react';
import SearchForm from '../SearchForm/SearchForm.js';
import NothingFound from '../NothingFound/NothingFound';
import Preloader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList.js';
import About from '../About/About';
import Footer from '../Footer/Footer';
import './App.css';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader.js';
import RegisterPopup from '../RegisterPopup/RegisterPopup.js';


function App() {
  const[isRegisterPopupOpen, setRegisterPopupOpen] = useState(false);

  function handleRegisterClick(){
    setRegisterPopupOpen(true);
  }
  return (
  (
    <div className="page">
      
      <SearchForm />
      <SavedNewsHeader />
      <NothingFound />
      <Preloader />
      <NewsCardList />
      <About />
      <Footer />
      <RegisterPopup
       isOpen={isRegisterPopupOpen} />
    </div>
  )
  );
}

export default App;
