import NewsCard from "../NewsCard/NewsCard"

function NewsCardList(props) {
    return (
        (

            <ul className='cards__list'>
                {props.cards
                    .slice(0, props.savedNewsLocation ? props.cards.length : props.numCardsShown)
                .map((card, index) => (
                <NewsCard
                    loggedin={props.loggedin}
                    savedNewsLocation={props.savedNewsLocation}
                    key={index}
                    card={card}
                    searchWord={props.searchWord}
                />
                ))}

            </ul>

        )
    )
}

export default NewsCardList;