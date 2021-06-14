import Header from '../Header/Header';
import NothingFound from '../NothingFound/NothingFound';
import Preloader from '../Preloader/Preloader';
import SearchForm from "../SearchForm/SearchForm";


function Main(props) {
    return (
        (
            <main className='main'>
                <div className='background'>
                    <div className='main__container'>
                        <h1 className='main__header'>What's going on in the world?</h1>
                        <p className='main__text'>Find the latest news on any topic and save them in your personal account.</p>
                    </div>
                    <SearchForm />
                </div>
                <Preloader />
                <NothingFound />

            </main>
        )
    )
}

export default Main;