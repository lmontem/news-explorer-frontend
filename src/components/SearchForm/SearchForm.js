import Header from '../Header/Header';
function SearchForm(props) {
    return (
        (
            <div className='background'>
                <Header />
                <section className='search'>

                    <h1 className='search__header'>What's going on in the world?</h1>
                    <p className='search__text'>Find the latest news on any topic and save them in your personal account.</p>
                    <form className='search__form'>
                        <input className='search__input' />
                        <button className='search__btn'>Search</button>
                    </form>
                </section>
            </div>

        )
    )
}

export default SearchForm;