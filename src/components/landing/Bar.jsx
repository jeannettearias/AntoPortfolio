import '../../styles/_bar.scss';

function Bar() {
    return (
        <>
            <div className="bar">
                <div className="bar-info">
                    <ul className='group-cards'>
                        <li className='label'>Product Designer
                            <img src="/images/icons/Bullets.svg" alt="" />
                        </li>
                        <li className='label'>UI/UX Designer
                            <img className='icon-bar' alt="" />
                        </li>
                        <li className='label'>Visual Designer
                            <img className='icon-bar' alt="" />
                        </li>
                        <li className='label'>Design System
                            <img className='icon-bar' alt="" />
                        </li>
                        <li className='label'>UX Researcher
                            <img className='icon-bar' alt="" />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Bar;
