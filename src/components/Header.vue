<template>
  <header id="home" class="header-area">
    <div class="shape header-shape-one">
      <img :src="shape1" alt="shape" />
    </div>
    <!-- header shape one -->

    <div class="shape header-shape-tow animation-one">
      <img src="https://i.ibb.co/BGX7b1b/shape-2.png" alt="shape" />
    </div>
    <!-- header shape tow -->

    <div class="shape header-shape-three animation-one">
      <img src="https://i.ibb.co/p3MknCp/shape-3.png" alt="shape" />
    </div>
    <!-- header shape three -->

    <div class="shape header-shape-fore">
      <img src="https://i.ibb.co/Nnvh0Tf/shape-4.png" alt="shape" />
    </div>
    <!-- header shape three -->

    <div class="navigation-bar">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg">
              <a class="navbar-brand" href="#">
                <img :src="logoTB" alt="Logo" />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul id="nav" class="navbar-nav ml-auto">
                  <li class="nav-item active">
                    <a class="page-scroll" href="#home">Inicio</a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="#about">Sobre Mí</a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="#service">Conocimientos</a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="#project">Proyectos</a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="#team">Experiencia</a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="#contact">Contacto</a>
                  </li>
                </ul>
                <!-- navbar nav -->
              </div>
              <div class="navbar-btn ml-20 d-none d-sm-block">
                <a class="main-btn" href="#contact"
                  ><i class="lni-phone"></i> +56 9 3357 XXXX</a
                >
              </div>
            </nav>
            <!-- navbar -->
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </div>
    <!-- navigation bar -->

    <div class="header-banner d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-lg-9 col-sm-10">
            <div class="banner-content">
              <h4
                class="sub-title wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="1s"
              >
                ¡Hola!
              </h4>
              <h1
                class="banner-title mt-10 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="2s"
              >
                Soy
                <span class="font-weight-bold featured"> Tamara Bravo</span>
                <span class="d-block">Software Developer</span>
              </h1>
              <p>Interesada/o en trabajar juntos? Hablemos</p>
              <a
                class="banner-contact mt-25 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="2.3s"
                rel="nofollow"
                href="#"
                >Quiero saber más!</a
              >
            </div>
            <!-- banner content -->
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- container -->
      <div
        class="banner-image bg_cover"
        :style="'background-image: url(' + banner + ')'"
      ></div>
    </div>
    <!-- header banner -->
  </header>
</template>

<script>
import shape1 from "./../assets/banner/shape/shape-1.png";
import logoTB from "./../assets/logo.png";
import banner from "./../assets/banner/banner-image.jpg";
export default {
  name: "Header",
  data() {
    return {
      shape1: shape1,
      logoTB: logoTB,
      banner: banner,
    };
  },
};
</script>

<style scoped>
</style>