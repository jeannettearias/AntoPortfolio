import "../../styles/_hero.scss";
import ProjectBtn from '../landing/buttons/ProjectBtn';
import ContactBtn from "../landing/buttons/ContactBtn";
import PropTypes from 'prop-types';

function Hero({ heroData, Buttons }) {

    return (
        <section id="Hero" className="hero">
            <div className="hero__container">
                <div className="hero__content">
                    <div className="logo__content">
                        <div className="ISO__logo">
                            <img
                                className="hero__logo"
                                src="images/hero/ISO_Logo.svg" alt="" />
                        </div>
                    </div>
                    <div className="hero__content__content">
                        <label className="hero-text">Soy <span className="hero-green-text">Antonia,</span><br /> product Designer</label>
                        <label className="hero__description">Diseño productos digitales centrados en las personas, combinando investigación,
                            diseño de interfaces y sistemas escalables para crear experiencias claras,
                            accesibles y alineadas con objetivos de negocio.</label>
                    </div>
                    <div className="group-buttons">
                        <ProjectBtn
                            Buttons={Buttons} />
                        <ContactBtn
                            Buttons={Buttons} />
                    </div>
                </div>


                <div className="hero__info">
                    <div className="figma__picture">
                        <img className="hero__img"
                            src="images/hero/HeroImage.svg" alt="" />
                    </div>
                    <div className="Detail_2"></div>
                    <div className="data__sections">
                        <div className="data__content">
                            {heroData.map(item => (
                                <div key={item.id}>
                                    <div className="hero__title">{item.title}</div>
                                    <div className="hero__info__description">{item.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );

}

export default Hero;

Hero.propTypes = {
    heroData: PropTypes.array.isRequired,
    Buttons: PropTypes.object,
};