import '../../../styles/_testimony.scss';



function GroupTestimony() {
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
                    <div className='margin_card'>
                        <div className='card_testimony'>
                            <div className='item_card'>
                                <label className='label_testimony_card'>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</label>
                            </div>
                            <div className='item_item_card'>
                                <img
                                    className='icono_item_card'
                                    src="images/testimony/circle_icon.png" />
                                <div className='content_item'>
                                    <label className='number_label'>Nombre de persona</label>
                                    <label className='content_label'>Área laboral, cargo, etc...</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='margin_card'></div>
                    <div className='margin_card'></div>
                </div>
            </section>
        </>
    );
}

export default GroupTestimony;