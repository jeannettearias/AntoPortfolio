import '../../styles/_bar.scss';

function Bar() {
    return (
        <>
            <div className="bar">
                <div className="bar__detail"></div>
                <div className="bar-info">

                    <ul className='group-cards'>
                        <li className='label'>Product Designer</li>
                        <li className='label'>UI/UX Designer</li>
                        <li className='label'>Visual Designer</li>
                        <li className='label'>Design System</li>
                        <li className='label'>UX Researcher</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Bar;
