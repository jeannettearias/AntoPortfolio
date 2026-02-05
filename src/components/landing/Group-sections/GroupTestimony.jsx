import '../../../styles/_testimony.scss';



function GroupTestimony({ activeTestimony }) {
    return (
        <>
            <section id="References" className="references-section">

                <div className='image_testimony'>
                    <img src="images/testimony/world.png" alt="" />
                </div>
                <div className='text_testimony'>
                    <div className='Badge'>
                        <label className='label_badge'>Referencias</label>
                    </div>
                    <div className='content_testimony'>
                        <label className='title_testimony_content'>El impacto de mi trabajo</label>
                    </div>

                </div>
                <div className='group_testimony_cards'>
                    {activeTestimony.map((testimony, index) => (
                        <div key={index} className='margin_card'>
                            <div className='card_testimony'>
                                <div className='item_card'>
                                    <label className='label_testimony_card'>{testimony.testimony}</label>
                                </div>
                                <div className='item_item_card'>
                                    <img
                                        className='icono_item_card'
                                        src={testimony.image} />
                                    <div className='content_item'>
                                        <label className='name_label'>{testimony.name}</label>
                                        <label className='position_label'>{testimony.position}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default GroupTestimony;