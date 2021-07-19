import React from 'react';


function SavedNewsHeader(props){
  
    return(
        (
            <section className='saved'>
                <p className='saved__heading'>Saved articles</p>
                <h2 className='saved__title'>{props.currentUser.username}, you have {props.cards.length} saved articles</h2>
                <p className='saved__key'>By keywords: <span className='saved__keywords'> Nature, Yellowstone, and 2 other</span></p>
            </section>
        )
    )
}

export default SavedNewsHeader;