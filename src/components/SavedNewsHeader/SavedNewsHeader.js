import React from 'react';


function SavedNewsHeader(props){

    function findKeywords() {
        const savedKeywords = [
          ...new Set(props.cards.map(({ keyword }) => keyword)),
        ];
        const [first, second] = savedKeywords;
        const { length } = savedKeywords;
      
        return length > 3
          ? `${first}, ${second}, and ${length - 2} others`
          : savedKeywords.join(', ');
      }
  
    return(
        (
            <section className='saved'>
                <p className='saved__heading'>Saved articles</p>
                <h2 className='saved__title'>{props.currentUser.username}, you have {props.cards.length} saved articles</h2>
                <p className='saved__key'>By keywords: <span className='saved__keywords'> { findKeywords() }</span></p>
            </section>
        )
    )
}

export default SavedNewsHeader;