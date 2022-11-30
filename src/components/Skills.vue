<template>
  <section id="service" class="services-area py-section gray-bg">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section-title text-center pb-4">
            <h5 class="sub-title mb-15">Conocimientos</h5>
            <h2 class="title">Que habilidades y herramientas manejo?</h2>
          </div>
          <!-- section title -->
        </div>
      </div>
      <!-- row -->
      <div class="row justify-content-center">
        <div
          class="col-lg-2 col-md-4 col-6 mt-4"
          v-for="(tool, index) in toolList"
          :key="index"
        >
          <div
            class="single-services text-center wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="0.4s"
          >
            <div class="services-icons">
              <i
                v-if="tool.icon !== ''"
                :class="tool.icon"
                class="colored devicon-font"
              ></i>
              <img v-else :src="tool.img" :alt="'Icono ' + tool.title" />
            </div>
            <div class="services-content mt-15">
              <p class="m-0">{{ tool.title }}</p>
            </div>
          </div>
          <!-- single services -->
        </div>
      </div>
      <!-- row -->
    </div>
    <!-- container -->
  </section>
</template>

<script>
import modyoLogo from "./../assets/skills/modyo.svg";
import veeValidate from "./../assets/skills/vee-validate.png";
import vuexLogo from "./../assets/skills/vuex.png";
export default {
  name: "Skills",
  data() {
    return {
      toolList: [
        {
          title: "Javascript",
          icon: "devicon-javascript-plain",
          img: "",
          type: "Development",
        },
        {
          title: "HTML5",
          icon: "devicon-html5-plain",
          img: "",
          type: "Development",
        },
        {
          title: "CSS3",
          icon: "devicon-css3-plain",
          img: "",
          type: "Development",
        },
        {
          title: "Bootstrap",
          icon: "devicon-bootstrap-plain",
          img: "",
          type: "Development",
        },
        {
          title: "VueJs",
          icon: "devicon-vuejs-plain",
          img: "",
          type: "Development",
        },
        {
          title: "Git",
          icon: "devicon-git-plain",
          img: "",
          type: "Development",
        },
        {
          title: "Modyo",
          icon: "",
          img: modyoLogo,
          type: "Development",
        },
        {
          title: "Vuex",
          icon: "",
          img: vuexLogo,
          type: "Development",
        },
        {
          title: "VeeValidate",
          icon: "",
          img: veeValidate,
          type: "Development",
        },
        {
          title: "Github",
          icon: "devicon-github-original",
          img: "",
          type: "Management",
        },
        {
          title: "Gitlab",
          icon: "devicon-gitlab-plain",
          img: "",
          type: "Management",
        },
        {
          title: "Bitbucket",
          icon: "devicon-bitbucket-original",
          img: "",
          type: "Management",
        },
        {
          title: "Typescript",
          icon: "devicon-typescript-plain",
          img: "",
          type: "Development",
        },
        {
          title: "Sass",
          icon: "devicon-sass-original",
          img: "",
          type: "Development",
        },
        {
          title: "Vuetify",
          icon: "devicon-vuetify-plain",
          img: "",
          type: "Development",
        },
        {
          title: "NestJS",
          icon: "devicon-nestjs-plain",
          img: "",
          type: "Development",
        },
        {
          title: "AngularJS",
          icon: "devicon-angularjs-plain",
          img: "",
          type: "Development",
        },
        {
          title: "NodeJS",
          icon: "devicon-nodejs-plain",
          img: "",
          type: "Development",
        },
        {
          title: "NPM",
          icon: "devicon-npm-original-wordmark",
          img: "",
          type: "Development",
        },
        {
          title: "Wordpress",
          icon: "devicon-wordpress-plain",
          img: "",
          type: "Development",
        },
        {
          title: "Firebase",
          icon: "devicon-firebase-plain",
          img: "",
          type: "Development",
        },
        {
          title: "Jira",
          icon: "devicon-jira-plain",
          img: "",
          type: "Management",
        },
        {
          title: "Confluence",
          icon: "devicon-confluence-original",
          img: "",
          type: "Management",
        },
        {
          title: "Visual Studio",
          icon: "devicon-visualstudio-plain",
          img: "",
          type: "Software",
        },
        {
          title: "Figma",
          icon: "devicon-figma-plain",
          img: "",
          type: "Applications",
        },
        {
          title: "Photoshop",
          icon: "devicon-photoshop-plain",
          img: "",
          type: "Applications",
        },
        {
          title: "Illustrator",
          icon: "devicon-illustrator-plain",
          img: "",
          type: "Applications",
        },
      ],
    };
  },
};
</script>

<style scoped>
.devicon-font {
  font-size: 80px;
}
.single-services {
  padding: 15px 8px;
}
.single-services {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.single-services:hover .colored {
  color: #fff;
}
.single-services img {
  max-height: 90px;
}
.single-services:hover img {
  filter: grayscale(1) invert() brightness(100);
}
.services-content p {
  color: #fff;
}
@media all and (min-width: 768px) {
  .single-services {
    padding: 20px 12px;
  }
}
</style>