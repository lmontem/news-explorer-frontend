import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
function SavedNews(props) {
    return (
        (
            <section className='saved-main'>
                <SavedNewsHeader />
                <div className='cards__block'>
                    <NewsCardList
                        searchWord={props.searchWord}
                        cards={props.cards}
                        loggedin={props.loggedin}
                        savedNewsLocation={props.savedNewsLocation}
                        onDelete={props.onDelete}
                        handleSaveArticleClick={props.handleSaveArticleClick} />
                </div>
            </section>
        )
    )
}

export default SavedNews;