function SavedNewsHeader(){
    return(
        (
            <section className='saved'>
                <p className='saved__heading'>Saved articles</p>
                <h2 className='saved__title'>Elise, you have 5 saved articles</h2>
                <p className='saved__key'>By keywords: <span className='saved__keywords'> Nature, Yellowstone, and 2 other</span></p>
            </section>
        )
    )
}

export default SavedNewsHeader;