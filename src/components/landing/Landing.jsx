import React from 'react';
import Hero from '../landing/Hero';
import Bar from '../landing/Bar';
import '../../styles/_landing.scss';
import heroData from '../../data/heroData.json';
import { useState } from 'react';

function Landing() {
    const [data, setData] = useState(heroData);


    return (
        <>
            <Hero heroData={heroData} />
            <Bar />
            <section className='landing'>
                <section className='area-content'>
                    <div className="content-me">
                        <div className="Badge">Sobre mí</div>
                        <p className="content-text">¿Porque elegirme para tu próximo proyecto?</p>
                    </div>
                    <div className="button-me">
                        <button className='btn-me'>Háblame</button>
                    </div>
                </section>


                <section className="area-box">

                </section>
            </section>


        </>
    );
}

export default Landing;