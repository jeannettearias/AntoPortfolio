import "../../styles/_hero.scss";

function Hero() {
    return (
        <>
            <section className="hero">
                <div className="hero__content">
                    <div className="Tag">
                        <label className="tag__label">Hello there</label>
                    </div>
                    <div className="hero__content__content">
                        <h1 className="hero__title">Soy Antonia, product Designer</h1>
                        <p className="hero__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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
                    <div className="data__section">
                        <div className="data__content">
                            <h4 className="hero__title_1">+4</h4>
                            <p className="hero__description_1">Años de experiencia</p>
                        </div>
                        <div className="data__content">
                            <h4 className="hero__title_2">+64</h4>
                            <p className="hero__description_2">Clientes satisfechos</p>
                        </div>
                        <div className="data__content">
                            <h4 className="hero__title_3">+30</h4>
                            <p className="hero__description_3">Proyectos completados</p>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Hero;