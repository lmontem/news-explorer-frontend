

function NewsCard(props) {
//converts date to design
function convertDate(date) {
    const newDate = new Date(date);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return newDate.toLocaleDateString("en-US", options);
  }

  
    return (
        (<>
            <li className='card'>
                <div className='card__img' style={{ backgroundImage: `url(${props.card.urlToImage})` }}>
                    {props.loggedin ? (<div className='card__keyword-display'
                    >{props.searchWord}</div>) : <div></div>}
                    <div className='card__btn-container'>
                        <button className={`card__btn card__btn_${props.savedNewsLocation ? 'trashcan' : 'bookmark' } card__btn_${props.card.isSaved ? 'active' : 'bookmark' }`} onClick={props.handleSaveArticleClick}></button>
                        {props.loggedin && props.savedNewsLocation ? <button className='card__btn-signin'>Remove from saved</button> :
                            (!props.loggedin ? <button className='card__btn-signin'>Sign in to save articles</button> : null)}
                    </div>
                </div>
                <p className='card__date'>{convertDate(props.card.publishedAt)}</p>
                <h3 className='card__title'>{props.card.title}</h3>
                <p className='card__description'>{props.card.description}</p>
                <p className='card__keyword'>{props.card.source.name}</p>
            </li>
           
        </>
        )
    )
}

export default NewsCard;