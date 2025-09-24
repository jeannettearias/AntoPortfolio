import React from 'react';
import '../../styles/_header.scss';
import '../../styles/core/_variables.scss'


function Header() {


    return (
        <>
            <section className='section-head'>
                <div className="background"></div>
                <nav className="head">
                    <div className="logo"></div>
                    <ul className="nav">

                        <li className='selected-tab'>Servicios</li>
                        <li className='tab'>Acerca de mí</li>
                        <li className='tab'>Competencias</li>
                        <li className='tab'>Estudios y Experiencia</li>
                        <li className='tab'>Proyectos</li>
                        <li className='tab'>Referencias</li>
                    </ul>
                    <button className='btn-contact'>Contacto</button>
                </nav>
            </section>
        </>
    );
}

export default Header;