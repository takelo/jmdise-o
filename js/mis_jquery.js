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




// boton flotante
//menu fijo y cambio de tamaño
 $(window).scroll(function(){
   var scroll = $(window).scrollTop();
   if(scroll > 500){
    $(".header").addClass('fixed');
  }else{
    $(".header").removeClass('fixed');
  }
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



 let idioma = navigator.language || navigator.userLanguage;
 idioma = idioma.substring(0,2);
//  idioma = "en";

 $.getJSON('js/lang.json', function(json){
   $('.lang').each(function(index,value){
    $(this).text(json[idioma][$(this).attr('key')]);
   });
 });



});//lave document ready
