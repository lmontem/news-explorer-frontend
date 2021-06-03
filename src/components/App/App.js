
import SearchForm from '../SearchForm/SearchForm.js';
import NothingFound from '../NothingFound/NothingFound';
import Preloader from '../Preloader/Preloader';
import NewsCard from '../NewsCard/NewsCard';
import About from '../About/About';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  return (
  (
    <div className="page">
      
      <SearchForm />
      <NothingFound />
      <Preloader />
      <NewsCard />
      <About />
      <Footer />
    </div>
  )
  );
}

export default App;
