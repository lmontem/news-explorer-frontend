import author from '../../images/leandra.jpg';
function About(props) {
    return (
        (
            <section className='about'>
                <img className='about__img' src={author} alt='the author' />
                <div className='about__container'>
                    <h2 className='about__heading'>About the author</h2>
                    <p className='about__description'>This block describes the project author. Here you should indicate your name, what you do, and which development technologies you know.

You can also talk about your experience with Practicum, what you learned there, and how you can help potential customers.</p>
                </div>
            </section>
        )
    )
}

export default About;