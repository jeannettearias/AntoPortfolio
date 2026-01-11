import "../../styles/_hero.scss";
import ProjectBtn from '../landing/buttons/ProjectBtn';
import ContactBtn from "../landing/buttons/ContactBtn";
import PropTypes from 'prop-types';

function Hero({ heroData, Buttons }) {

    return (

        <>
            <section id="Hero" className="hero">
                <div className="hero__content">
                    <div className="tag">
                        <h3 className="tag__label">Hello there</h3>
                    </div>
                    <div className="hero__content__content">
                        <h1 className="hero-text">Soy <span className="hero-green-text">Antonia</span>, product Designer</h1>
                        <p className="hero__description">Lorem Ipsum is simply dummy text
                            of the printing and typesetting industry.</p>
                    </div>
                    <div className="group-buttons">
                        <ProjectBtn
                            Buttons={Buttons} />
                        <ContactBtn
                            Buttons={Buttons} />
                    </div>
                </div>
                <div className="hero__info">

                    <div className="Detail_1">
                        <div className="rectangle_3"></div>
                        <div className="rectangle_4"></div>
                    </div>


                    <div className="figma__picture">
                        <img className="hero__img"
                            alt="" />
                    </div>

                    <div className="data__sections">
                        <div className="data__content">
                            {heroData.map(item => (
                                <ul key={item.id}>
                                    <li className="hero__title">{item.title}</li>
                                    <li className="hero__info__description">{item.description}</li>
                                </ul>
                            ))}
                        </div>
                    </div>
                    <div className="Detail_2"></div>
                </div>

            </section>
        </>
    );

}

export default Hero;

Hero.propTypes = {
    heroData: PropTypes.array.isRequired,
    Buttons: PropTypes.object,
};