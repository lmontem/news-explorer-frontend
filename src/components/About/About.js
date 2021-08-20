import author from '../../images/leandra.jpg';
function About(props) {
    return (
        (
            <section className='about'>
                <img className='about__img' src={author} alt='the author' />
                <div className='about__container'>
                    <h2 className='about__heading'>About the author</h2>
                    <p className='about__description'>   Hi, my name is Leandra and this is my final project in the web
          development course at Practicum by Yandex. My speciality is front-end development and improving user interaction as well as responsiveness.                       
           
</p>
                </div>
            </section>
        )
    )
}

export default About;