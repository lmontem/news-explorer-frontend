import Header from '../Header/Header.js';
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

function SavedNews(){
    return(
        (
            <section className='saved-main'>
                <Header />
                <SavedNewsHeader />
            </section>
        )
    )
}

export default SavedNews;