import { Link } from 'react-router-dom';

import '../../../styles/_heroBtns.scss';

function ProjectBtn({ Buttons }) {


    return (
        <>
            <div className="project__btn">
                <Link to="/Projects" className='button__link'>
                    Proyectos
                </Link>
            </div>
        </>
    );
}

export default ProjectBtn;