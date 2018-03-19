$(document).ready( function () {
  $('[data-toggle="tooltip"]').tooltip(); 

  if(screen.width < 750 || $(window).width() < 750) {
    initialSetupMin();
  }
  else {
    initialSetupMax();
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
      initialSetupMin();
    }
    else {
      initialSetupMax();
    }
    
  });

  $('.tags').click(function (e) {
    tagsFilter(e);
  })

  // Submit de Formulario
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

  
})

function scrollSection () {
  var scrollPosition = $(document).scrollTop();
  $('.tb-content section').each(function () {
    var idTop = $(this).offset().top;
    var idBottom = ($(this).height())/2+idTop;
    if (idTop-60 <= scrollPosition && idBottom >= scrollPosition) {
      $('.tb-nav ul').find('li a').removeClass('hover');
      $('.tb-nav-content ul li').find('[href="#'+$(this).attr('id')+'"]').addClass('hover');
    }
  });
}

function toggleMenu () {
  $('.tb-nav-content ul').toggle(500);
}

function tagsFilter (e) {
  e.preventDefault();
  console.log('Filtro');
}

function initialSetupMin() {
  $('.tb-nav-content ul').hide();
      $('.logo img').css('width','46px');
      $('.list').each(function () {
        $(this).find('a').removeClass('icons');
        $(this).find('a span').first().hide();
        $(this).find('a span:nth-child(2)').show();
      });
}

function initialSetupMax() {
  $('.tb-nav-content ul').show();
      $('.logo img').css('width','80px');
      $('.list').each(function () {
        $(this).find('a').addClass('icons');
        $(this).find('a span').first().show();
        $(this).find('a span:nth-child(2)').hide();
      })
}