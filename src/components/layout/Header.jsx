import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link"
import '../../styles/_header.scss';
import '../../styles/core/_variables.scss'


function Header() {


    return (
        <>
            <section className="background"></section>
            <section className='section-head'>
                <nav className="head">
                    <div className="logo"></div>
                    <ul className="nav">
                        <li className='tab selected-tab'>
                            <HashLink smooth to="#Services" className='menu__link' id="Services">Services</HashLink>
                        </li>
                        <li className='tab'>
                            <HashLink smooth to="#Skills" className='menu__link'>Acerca de mí</HashLink>
                        </li>
                        <li className='tab'>
                            <HashLink smooth to="#GroupHero" className='menu__link'>Competencias</HashLink>
                        </li>
                        <li className='tab'>
                            <HashLink smooth to="#GroupExperience" className='menu__link'>Estudios y Experiencia</HashLink>
                        </li>
                        <li className='tab'>
                            <HashLink smooth to="#GroupProjects" className='menu__link'>Proyectos</HashLink>
                        </li>
                        <li className='tab'>
                            <HashLink smooth to="#References" className='menu__link'>Referencias</HashLink>
                        </li>
                    </ul>
                    <button className='btn-contact'>Contacto</button>
                </nav>
            </section>

        </>
    );
}

export default Header;