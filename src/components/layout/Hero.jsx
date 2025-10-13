import "../../styles/_hero.scss";

function Hero({ heroData }) {

    return (
        <>
            <section className="hero">
                <div className="hero__content">
                    <div className="Tag">
                        <label className="tag__label">Hello there</label>
                    </div>
                    <div className="hero__content__content">
                        <h1 className="hero__title_1">Soy Antonia, product Designer</h1>
                        <p className="hero__description">Lorem Ipsum is simply dummy text
                            of the printing and typesetting industry.</p>
                    </div>
                    <div className="group-buttons">
                        <button className="contacto__btn">Contacto</button>
                        <button className="descargar__btn">Descargar CV</button>
                    </div>
                </div>
                <div className="hero__info">
                    <div className="Detail_1">
                        <div className="rectangle_3"></div>
                        <div className="rectangle_4"></div>
                    </div>
                    <div className="Detail_2"></div>
                    <div className="figma__picture">
                        <img
                            className="hero__img"
                            src="/images/Anto__hero.png" alt="" />
                    </div>
                    <div className="data__sections">
                        <div className="data__content">
                            {heroData.map(item => (
                                <div key={item.id} >
                                    <h4 className="hero__title">{item.numbData}</h4>
                                    <p className="hero__description">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}


export default Hero;