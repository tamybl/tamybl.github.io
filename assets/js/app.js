$(document).ready( function () {

  if(screen.width < 750 || $(window).width() < 750) {
    $('.tb-nav-content ul').hide();
    $('.logo img').css('width','55px');
  }

  $(document).scroll(function () {
    scrollSection();
  });

  $('.list').click(function (e) {
    e.preventDefault();
    var href = $(this).find('a').attr('href');
    $("html, body").stop().animate({ scrollTop: $(href).position().top }, 1000);
    if($(window).width() < 753) {
      toggleMenu();
    }
  });

  $('.toggle-menu').click(function () {
    toggleMenu();
  })

  $(window).resize(function () {
    var size = $(this).width();
    console.log(size);
    if(size < 752) {
      $('.tb-nav-content ul').hide();
      $('.logo img').css('width','55px');
    }
    else {
      $('.tb-nav-content ul').show();
      $('.logo img').css('width','100px');
    }
    
  });

  
})

function scrollSection () {
  var scrollPosition = $(document).scrollTop();
  $('.tb-content article').each(function () {
    var idTop = $(this).offset().top;
    var idBottom = ($(this).height())/2+idTop;
    if (idTop-60 <= scrollPosition && idBottom >= scrollPosition) {
      $('.tb-nav ul').find('li').removeClass('active');
      $('.tb-nav-content ul li').find('[href="#'+$(this).attr('id')+'"]').parent().addClass('active');
    }
  });
}

function toggleMenu () {
  $('.tb-nav-content ul').toggle(500);
}
