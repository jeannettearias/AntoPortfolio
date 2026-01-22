import "../../styles/_margin.scss";


function Margin() {

  return (
    <>
      <section className="section-hero">
        <div className="image_margin">
          <img className="sally_4"
            src={`${import.meta.env.BASE_URL}images/skills/AboutMeImage.svg`} alt="" />
        </div>

        <div className="content-tag">
          <div className="Badge">Sobre mí</div>
          <div className="Text_content">

            <div className="text_content_text">
              <label className="text_content_title">¿Quién es <a className="text_bold_content_title">Antonia Mendoza?</a></label>
              <label className="hero_info_1">Soy Diseñadora Industrial especializada en UX/UI y diseño de producto digital. Mi trabajo se enfoca en entender a las personas, definir problemas reales y diseñar soluciones funcionales que equilibren usuario, negocio y tecnología.</label>
              <label className="hero_info_2">Trabajo con metodologías ágiles y procesos colaborativos, aplicando accesibilidad, diseño atómico y métricas para crear productos consistentes y escalables.</label>
            </div>
          </div>

          <div className="Content_content_tags">
            <label className="content_tag_title">¿Por qué <a className="content_bold_tag_title">trabajar conmigo?</a></label>
            <label className="label_content">Diseño basado en investigación y datos, no solo en estética
              Experiencia real en consultoría y producto digital
              Enfoque en accesibilidad y usabilidad
              Capacidad para trabajar con stakeholders y equipos técnicos
              Pensamiento estratégico orientado a impacto y resultados</label>
          </div>
        </div>

      </section>
    </>
  );
}

export default Margin;