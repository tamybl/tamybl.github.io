<template>
  <section id="contact" class="contact-area py-section white-bg">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section-title text-center pb-20">
            <h5 class="sub-title mb-15">Contacto</h5>
            <h2 class="title">¿Quieres comunicarte conmigo?</h2>
          </div>
          <!-- section title -->
        </div>
      </div>
      <!-- row -->
      <div class="row justify-content-center">
        <div class="col-12 col-lg-8">
          <div v-if="success" class="box-status gray-bg p-5">
            <img :src="successIcon" alt="Icono éxito" class="mb-4" />
            <h3 class="mb-3">Mensaje enviado con éxito</h3>
            <p class="h6 font-weight-light">
              Tu mensaje fue recepcionado correctamente, nos pondremos en
              contacto contigo.
            </p>
          </div>
          <div v-else class="contact-form">
            <form
              id="contact-form"
              @submit.prevent="sendForm()"
              data-toggle="validator"
            >
              <div class="row">
                <div class="col-md-6">
                  <div class="single-form form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Tu nombre"
                      required="required"
                      v-model="name"
                    />
                    <div class="help-block with-errors"></div>
                  </div>
                  <!-- single form -->
                </div>
                <div class="col-md-6">
                  <div class="single-form form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="tucorreo@tudominio.com"
                      data-error="Valid email is required."
                      required="required"
                      v-model="email"
                    />
                    <div class="help-block with-errors"></div>
                  </div>
                  <!-- single form -->
                </div>
                <div class="col-md-6">
                  <div class="single-form form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Asunto"
                      data-error="Subject is required."
                      required="required"
                      v-model="subject"
                    />
                    <div class="help-block with-errors"></div>
                  </div>
                  <!-- single form -->
                </div>
                <div class="col-md-6">
                  <div class="single-form form-group">
                    <input
                      type="text"
                      name="phone"
                      placeholder="+569 1234 5678"
                      data-error="Phone is required."
                      required="required"
                      v-model="phone"
                    />
                    <div class="help-block with-errors"></div>
                  </div>
                  <!-- single form -->
                </div>
                <div class="col-md-12">
                  <div class="single-form form-group">
                    <textarea
                      placeholder="Hola Tamara, me interesa saber más de tu trabajo..."
                      name="message"
                      data-error="Please,leave us a message."
                      required="required"
                      v-model="message"
                    ></textarea>
                    <div class="help-block with-errors"></div>
                  </div>
                  <!-- single form -->
                </div>
                <p class="form-message"></p>
                <div class="col-md-12">
                  <div class="single-form form-group text-center">
                    <button type="submit" class="main-btn">
                      {{ sending ? "Enviando..." : "Enviar Mensaje" }}
                    </button>
                  </div>
                  <!-- single form -->
                </div>
              </div>
              <!-- row -->
            </form>
          </div>
          <!-- row -->
        </div>
      </div>
      <!-- row -->
    </div>
    <!-- container -->
  </section>
</template>

<script>
import success from "./../assets/contact/success-icon.svg";
export default {
  name: "ContactMe",
  data() {
    return {
      // Campos Form
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
      // Fin Campos Form
      error: false,
      errorMessage: "",
      sending: false,
      success: false,
      successIcon: success,
    };
  },
  methods: {
    sendForm() {
      this.sending = true;
      fetch("https://formsubmit.co/ajax/tamara.bravo.l@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          asunto: this.subject,
          nombre: this.name,
          telefono: this.phone,
          correo: this.email,
          mensaje: this.message,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.success) {
            this.success = true;
          } else {
            this.error = true;
            this.errorMessage = "Ha ocurrido un error al enviar el formulario";
          }
        })
        .catch((error) => {
          console.log(error);
          this.error = true;
          this.errorMessage = "Ha ocurrido un error al enviar el formulario";
        })
        .finally(() => {
          this.sending = false;
        });
    },
  },
};
</script>

<style scoped>
.box-status {
  border: 1px solid #f9c2cc;
  border-radius: 1rem;
}
.box-status h3 {
  font-size: 18px;
  font-weight: 600;
  color: #121619;
  font-family: "Hind", sans-serif;
}
.box-status img {
  max-width: 100%;
  width: 80px;
}
</style>