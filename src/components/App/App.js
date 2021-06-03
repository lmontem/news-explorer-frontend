// import logo from './logo.svg';
import Header from '../Header/Header.js'
import SearchForm from '../SearchForm/SearchForm.js';
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
      <Preloader />
      <About />
      <Footer />
    </div>
  )
  );
}

export default App;
