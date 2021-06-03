
import SearchForm from '../SearchForm/SearchForm.js';
import NothingFound from '../NothingFound/NothingFound';
import Preloader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList.js';
import About from '../About/About';
import Footer from '../Footer/Footer';
import './App.css';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader.js';


function App() {
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
    </div>
  )
  );
}

export default App;
