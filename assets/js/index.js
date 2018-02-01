$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 

    $(window).resize(function() {
        var bodyheight = $(this).height();
        $("#home").height(bodyheight);
    }).resize();
});