
function SearchForm(props) {
    return (
        (
            <section className='search'>
                <form className='search__form' onSubmit={props.handleSearchSubmit}>
                    <input className='search__input' placeholder='Enter topic' value={props.searchWord} onChange={(e) => {props.setSearchWord(e.target.value) }}/>
                    <button className='search__btn'>Search</button>
                </form>
                <div className='search__error'>{props.errorMessage}</div>

            </section>


        )
    )
}

export default SearchForm;