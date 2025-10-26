import { Link } from 'react-router-dom';
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
                        <li className='selected-tab'>
                            <Link className='menu__link' to="/Services" >Servicios</Link>
                        </li>
                        <li className='tab'>
                            <Link className='menu__link' to="/AboutMe" >Acerca de mí</Link>
                        </li>
                        <li className='tab'>
                            <Link className='menu__link' to="/Skills" >Competencias</Link>
                        </li>
                        <li className='tab'>
                            <Link className='menu__link' to="/Experience" >Estudios y Experiencia</Link>
                        </li>
                        <li className='tab'>
                            <Link className='menu__link' to="/Projects" >Proyectos</Link>
                        </li>
                        <li className='tab'>
                            <Link className='menu__link' to="/References" >Referencias</Link>
                        </li>
                    </ul>
                    <button className='btn-contact'>Contacto</button>
                </nav>
            </section>
        </>
    );
}

export default Header;