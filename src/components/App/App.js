// import logo from './logo.svg';
import Header from '../Header/Header.js'
import SearchForm from '../SearchForm/SearchForm.js';
import NothingFound from '../NothingFound/NothingFound';
import Preloader from '../Preloader/Preloader';
import About from '../About/About';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  return (
  (
    <div className="page">
      {/*<Header />*/}
      <SearchForm />
      <NothingFound />
      <Preloader />
      <About />
      <Footer />
    </div>
  )
  );
}

export default App;
