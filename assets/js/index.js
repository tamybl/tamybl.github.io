$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 

    $(window).resize(function() {
        var bodyHeight = $(this).height();
        var menuHeight = $(".nav-menu").height();
        $("#home").height(bodyHeight);
        $(".flex").height(bodyHeight-menuHeight);
    }).resize();
});