import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
function SavedNews(props){
    return(
        (
            <section className='saved-main'>               
                <SavedNewsHeader />
                <NewsCardList
                loggedin={props.loggedin}
                savedNewsLocation={props.savedNewsLocation} />
            </section>
        )
    )
}

export default SavedNews;