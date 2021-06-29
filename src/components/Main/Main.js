import NothingFound from '../NothingFound/NothingFound';
import Preloader from '../Preloader/Preloader';
import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
function Main(props) {
    return (
        (
            <main className='main'>
                <div className='background'>
                    <div className='main__container'>
                        <h1 className='main__header'>What's going on in the world?</h1>
                        <p className='main__text'>Find the latest news on any topic and save them in your personal account.</p>
                    </div>
                    <SearchForm
                        handleSearchSubmit={props.handleSearchSubmit}
                        errorMessage={props.errorMessage}
                        searchWord={props.searchWord}
                        setSearchWord={props.setSearchWord} />
                </div>
                {props.cards?.length > 0 ? (<section className='cards'>
                    <div className='cards__block'>
                        <h2 className='cards__title'>Search results</h2>
                        <NewsCardList
                            loggedin={props.loggedin}
                            savedNewsLocation={props.savedNewsLocation}
                            cards={props.cards}
                            numCardsShown={props.numCardsShown} 
                            searchWord={props.searchWord}
                            />
                       {props.numCardsShown < props.cards.length && (
                        <button className='cards__btn' onClick={props.handleShowMoreCards}>Show more</button>
                       )}
                    </div>
                </section>) : props.showPreloader ? <Preloader /> :
                    props.notFound || props.cards?.length < 0 ? <NothingFound /> : null}

                <About />
            </main>
        )
    )
}

export default Main;