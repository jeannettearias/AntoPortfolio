import React from 'react';
import '../../styles/_header.scss';

function Header() {
    return (
        <>
            <header className="head">
                <nav className="nav">
                    <ul >
                        <li className='tab'><a href="#services">Servicios</a></li>
                        <li><a href="#about">Acerca de mí</a></li>
                        <li><a href="#testimonials">Competencias</a></li>
                        <li><a href="#contact">Estudios y Experiencia</a></li>
                        <li><a href="#blog">Proyectos</a></li>
                        <li><a href="#projects">Referencias</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;