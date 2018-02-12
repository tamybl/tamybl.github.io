$(document).ready(function(){
  var menuHeight = $(".nav-menu").height();
  $('[data-toggle="tooltip"]').tooltip(); 

  $(window).resize(function() {
    var bodyHeight = $(this).height();
    $("#home").height(bodyHeight);
    $(".flex").height(bodyHeight-menuHeight);
  }).resize();

  // Animaciones secciones Sitio
  $(document).scroll(function () {
    // Cambio estilo menu 
    if($(window).height() <= $(document).scrollTop()+menuHeight) {
      console.log('Aqui el menu tiene que cambiar');
      $('.nav-menu').css('background-color', 'rgba(22,22,22,0.9)');
    }
    else {
      $('.nav-menu').css('background-color', 'rgba(22,22,22,0.3)');
    }

    // About Me
    animatedSection("#about", "animated fadeInDown", menuHeight, ".ion-ios-person-outline");
    // Curriculum
    animatedSection("#curriculum", "animated fadeInDown", menuHeight, ".ion-ios-paper-outline");   
    // Skills
    animatedSection("#skills", "animated fadeInDown", menuHeight, ".ion-ios-pie-outline");
    // Projects 
    animatedSection("#projects", "animated fadeInDown", menuHeight, ".ion-ios-lightbulb-outline");   
    // Contact 
    animatedSection("#contact", "animated fadeInDown", menuHeight, ".ion-ios-email-outline"); 
  })


  $("#myForm").submit(function(event){
      event.preventDefault();
      $.ajax({
        url: "https://www.enformed.io/se4gmfdd",
        method: "post",
        dataType: "json",
        accepts: "application/json",
        data: $("#myForm").serialize(),
        success: function(){
          console.log("Your form was successfully received!");
          // Show a success message here...
        },
        error: function(){
          console.log("Failure. Try again.");
          // Show an error message here...
        }
      });
    });


  // Texto en consola imagen introduccion
  var typed = new Typed("#typed", {
    stringsElement: '#typed-strings',
    typeSpeed: 0,
    backSpeed: 0,
    backDelay: 500,
    startDelay: 1000,
    loop: false
  }); 
});

/* Funcion que recibe parametros de posicion de un ID, clases, tamaño de menu 
* y margen y agrega los atributos al llegar a la ubicacion especificada.
*/
function animatedSection(id, attribute, menu, classMenu) {
  var scrollPosition = $(document).scrollTop();
  var sectionTop = $(id).offset().top;
  var sectionBottom = $(id).offset().top + $(id).height();
  if(sectionTop <= scrollPosition+menu+80 && sectionBottom >= scrollPosition+menu) {
    $(classMenu).parent().addClass("hover");
  }
  else {
    $(classMenu).parent().removeClass("hover");
  }
}

