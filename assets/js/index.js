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
    animatedSection("#about", "animated fadeInDown", menuHeight, ".ion-ios-person-outline");
    
  })




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
  console.log(menu);
  if(sectionTop <= scrollPosition+menu+50 && sectionBottom >= scrollPosition+menu) {
    //console.log('Estoy en la seccion');
    $(classMenu).parent().addClass("hover");
  }
  else {
    $(classMenu).parent().removeClass("hover");
    //console.log('No estoy en la seccion');
  }
}

