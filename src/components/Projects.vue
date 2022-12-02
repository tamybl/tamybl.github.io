<template>
  <section id="project" class="project-area py-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section-title text-center pb-50">
            <h5 class="sub-title mb-15">Proyectos</h5>
            <h2 class="title">Algunos desarrollos destacados</h2>
          </div>
          <!-- section title -->
        </div>
      </div>
      <!-- row -->
    </div>
    <div class="container-fluid">
      <div class="row project-active">
        <div class="col-12" v-for="(project, index) in projects" :key="index">
          <div class="single-project">
            <div class="project-image">
              <img :src="project.imgSrc" :alt="project.name" />
            </div>
            <div class="project-content">
              <h3 class="project-title">{{ project.name }}</h3>
              <div class="d-flex align-items-center justify-content-center">
                <a
                  v-if="project.codeUrl.length > 0"
                  class="icon-project mr-2"
                  :href="project.codeUrl"
                  target="_blank"
                  ><i class="devicon-github-original"></i
                ></a>
                <a
                  class="icon-project"
                  :href="project.previewUrl"
                  target="_blank"
                  ><i class="devicon-chrome-plain"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="single-project">
            <div class="project-image">
              <img :src="p7" alt="Project" />
            </div>
            <div class="project-content">
              <h3 class="project-title">Farmacias Operativas</h3>
              <div class="d-flex align-items-center justify-content-center">
                <a
                  class="icon-project mr-2"
                  href="https://github.com/tamybl/farmacias-operativas"
                  target="_blank"
                  ><i class="devicon-github-original"></i
                ></a>
                <a
                  class="icon-project"
                  :href="baseURL + '/farmacias-operativas/'"
                  target="_blank"
                  ><i class="devicon-chrome-plain"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from "jquery";
window.$ = window.jQuery = $;
import "slick-carousel";
import p1 from "./../assets/project/p-1.png";
import p2 from "./../assets/project/p-2.png";
import p3 from "./../assets/project/p-3.png";
import p4 from "./../assets/project/p-4.jpg";
import p5 from "./../assets/project/p-5.jpg";
import p6 from "./../assets/project/p-6.png";
import p7 from "./../assets/project/p-5.jpg";

export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          name: "Freelancer",
          imgSrc: p1,
          codeUrl: "https://github.com/tamybl/freelancer",
          previewUrl: "https://www.tamybl.dev/freelancer/",
          tags: ["HTML5", "CSS3"],
        },
        {
          name: "LabCar Boilerplate",
          imgSrc: p2,
          codeUrl: "https://github.com/tamybl/lab-car-boilerplate",
          previewUrl: "https://www.tamybl.dev/lab-car-boilerplate/",
          tags: ["HTML5", "Bootstrap", "jQuery"],
        },
        {
          name: "LyftApp",
          imgSrc: p3,
          codeUrl: "",
          previewUrl: "/lyftapp/",
          tags: [],
        },
        {
          name: "BCI - Personas",
          imgSrc: p4,
          codeUrl: "",
          previewUrl: "https://www.bci.cl",
          tags: ["Javascript", "JQuery", "VueJS"],
        },
        {
          name: "Pint Store",
          imgSrc: p5,
          codeUrl: "https://github.com/tamybl/beautysales-spa",
          previewUrl: "https://www.tamybl.dev/beautysales-spa/",
          tags: ["HTML5", "Javascript"],
        },
        {
          name: "Ecosnat",
          imgSrc: p6,
          codeUrl: "https://github.com/tamybl/ecosnat",
          previewUrl: "https://www.tamybl.dev/ecosnat/",
          tags: ["Javascript", "HTML5", "CSS3"],
        },
      ],
      p7: p7,
      sliderOptions: {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 5,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
    };
  },
  mounted() {
    this.initSlider();
  },
  methods: {
    initSlider() {
      $(".project-active").slick(this.sliderOptions);
    },
  },
  computed: {
    baseURL() {
      var currentURL = window.location.href;
      if (currentURL.includes("localhost")) {
        return "https://www.tamybl.dev";
      } else {
        return window.location.origin;
      }
    },
  },
};
</script>

<style scoped>
.icon-project {
  display: block;
  font-size: 32px;
  color: #fff;
}
</style>