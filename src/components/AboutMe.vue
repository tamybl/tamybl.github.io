<template>
  <section id="about" class="about-area py-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="about-image mt-50 clearfix">
            <div class="single-image float-left">
              <img :src="images.about1" alt="About" />
            </div>
            <!-- single image -->
            <div data-aos="fade-right" class="about-btn">
              <a class="main-btn" href="#"
                ><span>+4</span> años de Experiencia</a
              >
            </div>
            <div class="single-image image-tow float-right">
              <img :src="images.about2" alt="About" />
            </div>
            <!-- single image -->
          </div>
          <!-- about image -->
        </div>
        <div class="col-lg-6">
          <div class="about-content my-section section-title">
            <h4 class="sub-title">Sobre Mí</h4>
            <h3 class="title mt-2">¿Quien Soy?</h3>
            <article class="my-5">
              <p>
                Desarrolladora Front End e Ingeniera Civil en Sónido y Acústica
                de Santiago, Chile. Descubrí en la programación un espacio para
                crecer y expandir mi creatividad. Siento una gran pasión por
                ayudar a otros y puedo aportar a través del desarrollo de
                soluciones tecnológicas que faciliten la vida de las personas.
              </p>
              <p>
                Poseo una mente inquieta y curiosa, que gusta de aprender sobre
                nuevas tecnologías, formas de resolver problemas y buenas
                prácticas en el código. Me apasiona enfrentarme a nuevos
                desafíos y trabajar en equipo buscando siempre dar lo mejor de
                mí.
              </p>
              <p>
                En estos años he tenido la oportunidad de trabajar en proyectos
                para: BCI, Banco de Chile, Copec, Sencillito, Consorcio, Hites,
                entre otros.
              </p>
            </article>
            <a class="main-btn mt-2" href="#">Solicitar CV</a>
          </div>
          <!-- about content -->
        </div>
      </div>
      <!-- row -->
    </div>
    <!-- container -->
  </section>
</template>

<script>
import about1 from "./../assets/about/about-1.png";
import about2 from "./../assets/about/about-2.png";
export default {
  name: "AboutMe",
  data() {
    return {
      images: {
        about1: about1,
        about2: about2,
      },
    };
  },
};
</script>

<style scoped>
@media all and (min-width: 992px) {
  .about-image .about-btn {
    top: 120px;
    left: -100px;
  }
}
</style>