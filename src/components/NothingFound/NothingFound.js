import notFound from '../../images/not-found.svg';

function NothingFound() {
    return (
        (
            <section className='preloader'>
                <img className='nothing-found__img' src={notFound} alt='not found logo' />
                <h4 className='nothing-found__title'>Nothing Found</h4>
                <p className='preloader__message'>Sorry, but nothing matched
                your search terms.</p>
            </section>
        )
    )
}

export default NothingFound;