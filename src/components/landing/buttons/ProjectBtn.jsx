import { Link } from 'react-router-dom';
import '../../../styles/_heroBtns.scss';
import PropTypes from 'prop-types';

function ProjectBtn({ Buttons }) {
    const handleClick = () => {
        e.preventDefault();

        const element = document.getElementById('GroupProjects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="project__btn">
                <a
                    href='#GroupProjects'
                    className='button__link'
                    onClick={handleClick}>
                    Proyectos
                </a>
            </div>
        </>
    );
}

ProjectBtn.propTypes = {
    Buttons: PropTypes.object,
};

export default ProjectBtn;