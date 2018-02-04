$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 

    $(window).resize(function() {
        var bodyHeight = $(this).height();
        var menuHeight = $(".nav-menu").height();
        $("#home").height(bodyHeight);
        $(".flex").height(bodyHeight-menuHeight);
    }).resize();
  var typed = new Typed("#typed", {
    stringsElement: '#typed-strings',
    typeSpeed: 0,
    backSpeed: 0,
    backDelay: 500,
    startDelay: 1000,
    loop: false
  }); 


});

