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
                        <p className="hero__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="group-buttons">
                        <button>Contacto</button>
                        <button>Descargar CV</button>

                    </div>
                </div>

            </section>
        </>
    );
}

export default Hero;