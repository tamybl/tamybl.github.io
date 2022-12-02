<template>
  <section id="team" class="team-area pt-125 pb-130 gray-bg">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section-title text-center pb-20">
            <h5 class="sub-title mb-15">Clientes</h5>
            <h2 class="title">Empresas a quienes he prestado servicio</h2>
          </div>
          <!-- section title -->
        </div>
      </div>
      <!-- row -->
      <div class="row">
        <div
          class="col-lg-3 col-md-6 col-sm-6"
          v-for="(client, index) in clients"
          :key="index"
        >
          <div
            class="single-team text-center mt-30 wow fadeInUp"
            data-wow-duration="1.5s"
            :data-wow-delay="client.wowDelay"
          >
            <div class="team-image">
              <img :src="client.logo" :alt="'Logo ' + client.name" />
            </div>
            <div class="team-content">
              <h4 class="team-name">
                <a href="#">{{ client.name }}</a>
              </h4>
              <span class="sub-title d-none">CEO & Founder</span>
              <ul class="social mt-25">
                <p class="small">{{ client.description }}</p>
              </ul>
            </div>
          </div>
          <!-- single team -->
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div
            class="single-team text-center mt-30 wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="0.8s"
          >
            <div class="team-image">
              <img src="assets/images/team/team-2.jpg" alt="Team" />
            </div>
            <div class="team-content">
              <h4 class="team-name"><a href="#">Banco de Chile</a></h4>
              <span class="sub-title">Chief Designer</span>
            </div>
          </div>
          <!-- single team -->
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div
            class="single-team text-center mt-30 wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="1.2s"
          >
            <div class="team-image">
              <img src="assets/images/team/team-3.jpg" alt="Team" />
            </div>
            <div class="team-content">
              <h4 class="team-name"><a href="#">BCI</a></h4>
              <span class="sub-title">Consultant</span>
              <ul class="social mt-25">
                <li>
                  <a href="#"><i class="lni-facebook-filled"></i></a>
                </li>
                <li>
                  <a href="#"><i class="lni-twitter-original"></i></a>
                </li>
                <li>
                  <a href="#"><i class="lni-linkedin-original"></i></a>
                </li>
              </ul>
            </div>
          </div>
          <!-- single team -->
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div
            class="single-team text-center mt-30 wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="1.6s"
          >
            <div class="team-image">
              <img src="assets/images/team/team-4.jpg" alt="Team" />
            </div>
            <div class="team-content">
              <h4 class="team-name"><a href="#">Mark Parker</a></h4>
              <span class="sub-title">Intern</span>
              <ul class="social mt-25">
                <li>
                  <a href="#"><i class="lni-facebook-filled"></i></a>
                </li>
                <li>
                  <a href="#"><i class="lni-twitter-original"></i></a>
                </li>
                <li>
                  <a href="#"><i class="lni-linkedin-original"></i></a>
                </li>
              </ul>
            </div>
          </div>
          <!-- single team -->
        </div>
      </div>
      <!-- row -->
    </div>
    <!-- container -->
  </section>
</template>

<script>
import logoBci from "./../assets/clients/logo-bci.svg";
export default {
  name: "Clients",
  data() {
    return {
      clients: [
        {
          name: "BCI",
          logo: logoBci,
          wowDelay: "0.4s",
          description:
            "El Banco de Crédito e Inversiones es una empresa bancaria chilena, propiedad de la familia Yarur desde sus inicios. Actualmente, BCI es el tercer banco privado en términos de colocaciones y el cuarto banco en número de clientes.",
        },
        {
          name: "Banco de Chile",
          logo: logoBci,
          wowDelay: "0.8s",
          description:
            "Banco de Chile es una institución financiera que opera en Chile. Cuenta con una red de sucursales presentes en gran parte del país, cajeros automáticos y otros canales de distribución electrónicos. Proporciona productos y servicios financieros a grandes corporaciones, pequeñas y medianas empresas, y a personas.​",
        },
        {
          name: "BCI",
          logo: logoBci,
          wowDelay: "0.4s",
          description:
            "El Banco de Crédito e Inversiones es una empresa bancaria chilena, propiedad de la familia Yarur desde sus inicios. Actualmente, BCI es el tercer banco privado en términos de colocaciones y el cuarto banco en número de clientes.",
        },
      ],
    };
  },
};
</script>