import { HashLink } from "react-router-hash-link"
import '../../styles/_header.scss';
import '../../styles/core/_variables.scss'


function Header() {

    return (
        <section className='section-head'>

            <div className="logo">
                <div className='ISO_header_logo'>
                    <img
                        className='header_logo'
                        src="images/header/Anto_logo.svg"
                        alt="" />
                </div>
            </div>
            <div className="nav">
                <div className='tab'>
                    <HashLink smooth to="#Services" className='menu__link'>Servicios</HashLink>
                </div>
                <div className='tab'>
                    <HashLink smooth to="#aboutMe" className='menu__link'>Acerca de mí</HashLink>
                </div>
                <div className='tab'>
                    <HashLink smooth to="#GroupHero" className='menu__link'>Competencias</HashLink>
                </div>
                <div className='tab'>
                    <HashLink smooth to="#GroupExperience" className='menu__link'>Estudios y Experiencia</HashLink>
                </div>
                <div className='tab'>
                    <HashLink smooth to="#GroupProjects" className='menu__link'>Proyectos</HashLink>
                </div>
                <div className='tab'>
                    <HashLink smooth to="#References" className='menu__link'>Referencias</HashLink>
                </div>
            </div>
            <button className='btn-contact'>
                <HashLink smooth to="#contactUs" className='menu__link'>Contacto</HashLink>
            </button>

        </section>
    );
}

export default Header;