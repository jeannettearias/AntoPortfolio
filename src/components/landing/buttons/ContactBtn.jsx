import '../../../styles/_heroBtns.scss';
import PropTypes from 'prop-types';

function ContactBtn({ Buttons }) {
    return (
        <>
            <button
                className="contact__btn">
                <a className='contact__link'
                    href="https://www.linkedin.com/in/antoniamendoza/"
                    target="_blank" rel="noopener noreferrer">
                    Contacto
                </a>
            </button>
        </>
    );
}

ContactBtn.propTypes = {
    Buttons: PropTypes.object,
};

export default ContactBtn;