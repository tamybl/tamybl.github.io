<template>
  <section id="contact" class="contact-area pt-125 pb-130 gray-bg">
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
        <div class="col-lg-8">
          <div class="contact-form">
            <form
              id="contact-form"
              action="assets/contact.php"
              method="post"
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
                    ></textarea>
                    <div class="help-block with-errors"></div>
                  </div>
                  <!-- single form -->
                </div>
                <p class="form-message"></p>
                <div class="col-md-12">
                  <div class="single-form form-group text-center">
                    <button type="submit" class="main-btn">
                      Enviar Mensaje
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
export default {
  name: "ContactMe",
};
</script>