import "../../styles/_hero.scss";
import ContactBtn from "../landing/buttons/ContactBtn";
import DownloadBtn from "../landing/buttons/DownloadBtn";
import React from "react";

function Hero({ heroData }) {

    return (
        <>
            <section className="hero">
                <div className="hero__content">
                    <div className="Tag">
                        <label className="tag__label">Hello there</label>
                    </div>
                    <div className="hero__content__content">
                        <h1 className="hero__title">Soy Antonia, product Designer</h1>
                        <p className="hero__description">Lorem Ipsum is simply dummy text
                            of the printing and typesetting industry.</p>
                    </div>
                    <div className="group-buttons">
                        <ContactBtn
                            contactBtn={<ContactBtn />} />
                        <DownloadBtn />
                    </div>
                </div>
                <div className="hero__info">
                    <div className="Detail_1">
                        <div className="rectangle_3"></div>
                        <div className="rectangle_4"></div>
                        <div className="Detail_2">

                            <div className="figma__picture">
                                <img
                                    className="hero__img"
                                    src="/images/Anto__hero.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>

                    <div className="data__sections Detail_2">
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