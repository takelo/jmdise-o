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


  // $('.informacion-portada p').hover(
  //   function() {
  //       $(this).stop().animate({backgroundColor:'#4E1402'}, 300);
  //       }, function () {
  //       $(this).stop().animate({backgroundColor:'#943D20'}, 100);
  //   });


  // lettering
  // $(".titulo p span.texto").lettering();

  // window.setTimeout( $(".char1").show(100), 5000 ); // 5 seconds
  // $("p.presentacion").lettering();
  // for (i = 1; i < 72; i++) {
  //
  //   $(".char"+i).show(i*100);
  // }
  // $(".char1").show(100);
  // $(".char2").show(300);
  // $(".char3").show(600);
  // $(".char4").show(800);
  // $(".char5").show(1000);
  // $(".char6").show(1200);
  // $(".char7").show(1400);
  // $(".char8").show(1500);
  // $(".char9").show(1700);
  // $(".char10").show(1900);
  // $(".char11").show(2100);
  // $(".char12").show(2300);
  // $(".char13").show(2500);
  // $(".char14").show(2800);
  // $(".char15").show(3000);
  // $(".char16").show(3200);
  // $(".char17").show(3400);
  // $(".char18").show(3600);
  // $(".char19").show(3800);
  // $(".char20").show(4000);
  // $(".char21").show(4200);
  // $(".char22").show(4400);
  // $(".char23").show(4600);
  // $(".char24").show(4800);
  // $(".char25").show(5000);
  // $(".char26").show(5200);
  // $(".char27").show(5400);
  // $(".char28").show(5600);
  // $(".char29").show(5800);
  // $(".char30").show(6000);
  // $(".char31").show(6200);
  // $(".char32").show(6400);
  // $(".char33").show(6600);
  // $(".char34").show(6800);
  // $(".char35").show(7000);
  // $(".char36").show(7200);
  // $(".char37").show(7400);
  // $(".char38").show(7600);
  // $(".char39").show(7800);
  // $(".char40").show(8000);
  // $(".char41").show(8200);
  // $(".char42").show(8400);
  // $(".char43").show(8600);
  // $(".char44").show(8800);
  // $(".char45").show(9000);
  // $(".char46").show(9200);
  // $(".char47").show(9400);
  // $(".char48").show(9600);
  // $(".char49").show(9800);
  // $(".char50").show(10000);
  // $(".char51").show(10200);
  // $(".char52").show(10400);
  // $(".char53").show(10600);
  // $(".char54").show(10800);
  // $(".char55").show(11000);
  // $(".char56").show(11200);
  // $(".char57").show(11400);
  // $(".char58").show(11600);
  // $(".char59").show(11800);
  // $(".char60").show(12000);
  // $(".char61").show(12200);

  // $("div.informacion p").fadeIn(3300);


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
