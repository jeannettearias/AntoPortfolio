import '../../../styles/_heroBtns.scss';

function ContactBtn({ ContactBtn }) {


    return (
        <>
            <div className='ContactBtn'>
                <button className="contact__btn">
                    <a
                        href="https://www.linkedin.com/in/antoniamendoza/"
                        target="_blank" rel="noopener noreferrer">
                        Contacto
                    </a>
                </button>
            </div>
            <div className='DownloadBtn'>
                <button className="descargar__btn">
                    Descargar CV
                </button>
            </div>
        </>
    );
}

export default ContactBtn;