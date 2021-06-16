import NewsCard from "../NewsCard/NewsCard"

function NewsCardList(props) {
    return (
        (
            <section className='cards'>
                <div className='cards__block'>
                <h2 className='cards__title'>Search results</h2>
                <div className='cards__list'>
                    <NewsCard 
                    savedNewsLocation= {props.savedNewsLocation}/>
                </div>

                <button className='cards__btn'>Show more</button>
                </div>
            </section>
        )
    )
}

export default NewsCardList;