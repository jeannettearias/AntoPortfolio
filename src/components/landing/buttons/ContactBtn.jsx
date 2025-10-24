import '../../../styles/_heroBtns.scss';

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

export default ContactBtn;