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
  $(".titulo p span.texto").lettering();
  // $("p.presentacion").lettering();
  $(".char1").fadeIn(100);
  $(".char2").fadeIn(200);
  $(".char3").fadeIn(300);
  $(".char4").fadeIn(400);
  $(".char5").fadeIn(500);
  $(".char6").fadeIn(600);
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
  $(".char27").fadeIn(2600);
  $(".char28").fadeIn(2650);
  $(".char29").fadeIn(2700);
  $(".char30").fadeIn(2750);

  $(".char31").fadeIn(1100);
  $(".char32").fadeIn(1200);
  $(".char33").fadeIn(1300);
  $(".char34").fadeIn(1400);
  $(".char35").fadeIn(1500);
  $(".char36").fadeIn(1600);
  $(".char37").fadeIn(1700);
  $(".char38").fadeIn(1800);
  $(".char39").fadeIn(1900);
  $(".char40").fadeIn(2000);
  $(".char41").fadeIn(2100);
  $(".char42").fadeIn(2200);
  $(".char43").fadeIn(2300);
  $(".char44").fadeIn(2400);
  $(".char45").fadeIn(2500);
  $(".char46").fadeIn(2600);
  $(".char47").fadeIn(2600);
  $(".char48").fadeIn(2650);
  $(".char49").fadeIn(2700);
  $(".char50").fadeIn(2750);
  $(".char51").fadeIn(1100);
  $(".char52").fadeIn(1200);
  $(".char53").fadeIn(1300);
  $(".char54").fadeIn(1400);
  $(".char55").fadeIn(1500);
  $(".char56").fadeIn(1600);
  $(".char57").fadeIn(1700);
  $(".char58").fadeIn(1500);
  $(".char59").fadeIn(1600);
  $(".char60").fadeIn(1700);

  // $("div.informacion p").fadeIn(3300);


// boton flotante
//menu fijo y cambio de tamaño
 $(window).scroll(function(){
   var scroll = $(window).scrollTop();
   if(scroll > 2500){
       $(".flotante").fadeIn(1000);
     }else{
         $(".flotante").fadeOut(1000);
     }
 });

 $(".quien-soy").waypoint(function(){
   $(".quien-soy").css('background-color', 'black');
   $(".quien-soy img").css('transform', 'rotate(360deg)');
   $(".quien-soy img").css('filter', 'grayscale(0)');
   // $(".resumen-evento li:nth-child(2) p").animateNumber({number:15},1200);
   // $(".resumen-evento li:nth-child(3) p").animateNumber({number:3},1500);
   // $(".resumen-evento li:nth-child(4) p").animateNumber({number:9},1500);
 }, {
   offset: "60%"
 });

});//lave document ready
