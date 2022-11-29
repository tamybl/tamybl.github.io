<template>
  <footer id="footer" class="footer-area">
    <div class="footer-widget pt-80 pb-130">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-4 col-sm-8">
            <div class="footer-logo mt-50 d-flex">
              <a href="#">
                <img :src="logoTB" alt="Logo" />
              </a>

              <ul class="footer-info">
                <li>
                  <div class="single-info">
                    <div class="info-icon">
                      <i class="lni-phone-handset"></i>
                    </div>
                    <div class="info-content">
                      <p>+56 93357 4X XX</p>
                    </div>
                  </div>
                  <!-- single info -->
                </li>
                <li>
                  <div class="single-info">
                    <div class="info-icon">
                      <i class="lni-envelope"></i>
                    </div>
                    <div class="info-content">
                      <p>hola@tamybl.dev</p>
                    </div>
                  </div>
                  <!-- single info -->
                </li>
                <li>
                  <div class="single-info">
                    <div class="info-icon">
                      <i class="lni-map"></i>
                    </div>
                    <div class="info-content">
                      <p>Santiago, Chile</p>
                    </div>
                  </div>
                  <!-- single info -->
                </li>
              </ul>
            </div>
            <!-- footer logo -->
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="footer-link mt-45">
              <div class="f-title">
                <h4 class="title">Essential Links</h4>
              </div>
              <ul class="mt-15">
                <li><a href="#">Sobre Mí</a></li>
                <li><a href="#">Proyectos</a></li>
                <li><a href="#">Contacto</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="footer-link mt-45">
              <div class="f-title">
                <h4 class="title">Services</h4>
              </div>
              <ul class="mt-15">
                <li><a href="#">Product Design</a></li>
                <li><a href="#">Research</a></li>
                <li><a href="#">Office Management</a></li>
              </ul>
            </div>
          </div>
          <div class="col-12 footer-logo pt-4">
            <ul class="footer-social mt-20">
              <li>
                <a href="#"><i class="lni-facebook-filled"></i></a>
              </li>
              <li>
                <a href="#"><i class="lni-twitter-original"></i></a>
              </li>
              <li>
                <a href="#"><i class="lni-google"></i></a>
              </li>
              <li>
                <a href="#"><i class="lni-instagram"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </div>
    <!-- footer widget -->
    <div class="copyright-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="copyright text-center">
              <p>
                Desarrollado por
                <a href="mailto:hola@tamybl.dev" rel="nofollow">tamybl</a>
              </p>
            </div>
            <!-- copyright -->
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </div>
    <!-- copyright-area -->
  </footer>
</template>

<script>
import logoTB from "./../assets/logo.png";
export default {
  name: "Footer",
  data() {
    return {
      logoTB: logoTB,
      RRSS: [
        {
          title: "Linkedin",
          url: "",
        },
        {
          title: "Github",
          url: "",
        },
        {
          title: "",
          url: "",
        },
      ],
    };
  },
};
</script>