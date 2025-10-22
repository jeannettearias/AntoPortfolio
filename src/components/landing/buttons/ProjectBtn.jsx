import '../../../styles/_heroBtns.scss';

function ProjectBtn({ Buttons }) {


    return (
        <>
            <button className="project__btn">
                <a className='button__link'
                    href="https://www.linkedin.com/in/antoniamendoza/"
                    target="_blank" rel="noopener noreferrer">
                    Proyectos
                </a>
            </button>
        </>
    );
}

export default ProjectBtn;