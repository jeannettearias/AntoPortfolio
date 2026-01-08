import "../../styles/_margin.scss";


function Margin() {


  return (
    <>
      <section className="section-hero">
        <div className="image_margin">
          <img className="library_clouds_cloud_2"
            src={`${import.meta.env.BASE_URL}images/skills/cloud_2.png`} alt="" />
          <img className="library_clouds_cloud_4"
            src={`${import.meta.env.BASE_URL}images/skills/cloud_4.png`} alt="" />
          <img className="sally_4"
            src={`${import.meta.env.BASE_URL}images/skills/sally_4.png`} alt="" />
        </div>

        <div className="content-tag">
          <div className="Badge">Sobre mí</div>
          <div className="text_content">

            <div className="text_content_text">
              <h2 className="hero_title">¿Quién es <a className="hero_bold_title">Antonia Mendoza?</a></h2>
              <label className="hero_info_1">Soy Diseñadora Industrial especializada en UX/UI y diseño de producto digital. Mi trabajo se enfoca en entender a las personas, definir problemas reales y diseñar soluciones funcionales que equilibren usuario, negocio y tecnología.</label>
              <label className="hero_info_2">Trabajo con metodologías ágiles y procesos colaborativos, aplicando accesibilidad, diseño atómico y métricas para crear productos consistentes y escalables.</label>
            </div>
          </div>
        </div>

        <div>

        </div>

      </section>
    </>
  );
}

export default Margin;