import { Link } from 'react-router-dom';
import '../../../styles/_heroBtns.scss';
import PropTypes from 'prop-types';

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

ProjectBtn.propTypes = {
    Buttons: PropTypes.object,
};

export default ProjectBtn;