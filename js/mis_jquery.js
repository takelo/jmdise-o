$(document).ready(function() {
  // scroll lento
  $('a.ancla').click(function(e){
    e.preventDefault();

    $('li').removeClass("active");
    $(this).parent().addClass("active");
    var link = $(this);
    var anchor  = link.attr('href');
    $('html, body').stop().animate({
        scrollTop: jQuery(anchor).offset().top - 100
    }, 2000);
    return false;
  });

  $('.navbar ul li').click(function(e){

    $('li').removeClass("active");
    $(this).addClass("active");
  });

});//lave document ready
