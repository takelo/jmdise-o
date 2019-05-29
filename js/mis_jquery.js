$(document).ready(function() {


  // menu movil
  $(".hamburger").click(function(){
    $(".hamburger").toggleClass('open');
    $(".hamburger").toggleClass("pad-top-10");
    $(".barra").toggleClass('open');
    $(".contenedor_menu").toggle();
    // $(".barra").toggleClass('transparente');
 });
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

  // menu activo
  $('.navbar ul li').click(function(e){
    $('li').removeClass("active");
    $(this).addClass("active");
  });

  // lettering
  $(".titulo h2").lettering();
  $(".char1").fadeIn(200);
  $(".char2").fadeIn(300);
  $(".char3").fadeIn(400);
  $(".char4").fadeIn(500);
  $(".char5").fadeIn(600);
  $(".char6").fadeIn(650);
  $(".char7").fadeIn(700);
  $(".char8").fadeIn(800);
  $(".char9").fadeIn(900);
  $(".char10").fadeIn(1000);
  $(".char11").fadeIn(1100);
  $(".char12").fadeIn(1200);
  $(".char13").fadeIn(1300);
  $(".char14").fadeIn(1400);
  $(".char15").fadeIn(1500);
  $(".char16").fadeIn(1600);
  $(".char17").fadeIn(1700);
  $(".char18").fadeIn(1800);
  $(".char19").fadeIn(1900);
  $(".char20").fadeIn(2000);
  $(".char21").fadeIn(2100);
  $(".char22").fadeIn(2200);
  $(".char23").fadeIn(2300);
  $(".char24").fadeIn(2400);
  $(".char25").fadeIn(2500);
  $(".char26").fadeIn(2600);
  // $("div.informacion p").fadeIn(3300);


// boton flotante
//menu fijo y cambio de tamaño
 $(window).scroll(function(){
   var scroll = $(window).scrollTop();
   if(scroll > 300){
       $(".flotante").fadeIn(1000);
     }else{
         $(".flotante").fadeOut(1000);
     }
 });

});//lave document ready
