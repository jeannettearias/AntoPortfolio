import React from 'react';
import '../../styles/_header.scss';


function Header() {


    return (
        <>
            <section className='section-head'>
                <nav className="head">
                    <div className="background"></div>
                    <ul className="nav">
                        <div className="logo"></div>
                        <li className='selected-tab'><a href="#services">Servicios</a></li>
                        <li className='tab'><a href="#about">Acerca de mí</a></li>
                        <li className='tab'><a href="#competencies">Competencias</a></li>
                        <li className='tab'><a href="#knowledge">Estudios y Experiencia</a></li>
                        <li className='tab'><a href="#projects">Proyectos</a></li>
                        <li className='tab'><a href="#references">Referencias</a></li>
                    </ul>
                    <button className='btn-contact'>Contacto</button>
                </nav>
            </section>
        </>
    );
}

export default Header;