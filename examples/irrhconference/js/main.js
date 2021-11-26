(function() {
    "use strict";
    document.addEventListener("DOMContentLoaded", function(){
        //mapa
        if(document.getElementById("mapa")){
          var map = L.map('mapa').setView([-31.726369, -60.523306], 13);//vista, zoom
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(map);
          L.marker([-31.726369, -60.523306]).addTo(map)
              .bindPopup('Esta es mi casa.')//este es el texto del markador
              .openPopup();
        }

        //Campos usuario
        var nombre = document.getElementById("nombre");
        var apellido = document.getElementById("apellido");
        var email = document.getElementById("email");

        //Campos pases
        var pase_dia = document.getElementById("pase_dia");
        var pase_dosdias = document.getElementById("pase_dosdias");
        var pase_completo = document.getElementById("pase_completo");

        //Botones y div
        var calcular = document.getElementById("calcular");
        var errorDiv = document.getElementById("error");
        var botonRegistro = document.getElementById("btnRegistro");
        var resultado = document.getElementById("lista_productos");

        var suma = document.getElementById("suma_total");

        //Extras
        var etiquetas = document.getElementById("etiquetas");
        var camisas = document.getElementById("camisa_evento");

        if(document.getElementById("calcular")){
          calcular.addEventListener("click", calcularMontos);

          pase_dia.addEventListener("blur", mostrarDias);
          pase_dosdias.addEventListener("blur", mostrarDias);
          pase_completo.addEventListener("blur", mostrarDias);

          nombre.addEventListener("blur", validarCampos);
          apellido.addEventListener("blur", validarCampos);
          email.addEventListener("blur", validarCampos);

          email.addEventListener("blur", validarMail);

          function validarCampos(){
              if(this.value == ""){
                  errorDiv.style.display="block";
                  errorDiv.innerHTML = "Este campo es obligatorio";
                  this.style.border = "1px solid red";
                  errorDiv.style.border = "1px solid red";
              }else{
                  errorDiv.style.display="none";
                  this.style.border = "1px solid #cccccc";
              }
          }

          function validarMail(){
              if(this.value.indexOf("@") == -1){
                  errorDiv.style.display="block";
                  errorDiv.innerHTML = "Debe contener @";
                  this.style.border = "1px solid red";
                  errorDiv.style.border = "1px solid red";
              }else{
                  errorDiv.style.display="none";
                  this.style.border = "1px solid #cccccc";
              }
          }

          function calcularMontos(event){
              event.preventDefault();
              if (regalo.value === ""){
                  alert("Debes elegir un regalo");
                  regalo.focus();
              }else{
                  var boletosDia = pase_dia.value,
                      boletos2Dia = pase_dosdias.value,
                      boletosCompleto = pase_completo.value,
                      cantCamisas = camisas.value,
                      cantEtiquetas = etiquetas.value;
                  var total =( boletosDia * 30) + (boletos2Dia * 45) + (boletosCompleto * 50)
                               + ((cantCamisas*10) * .93) + (cantEtiquetas*2);

                  var listadoProductos = [];
                  if(boletosDia >= 1){
                      listadoProductos.push(boletosDia+" Pases por día");
                  }
                  if(boletos2Dia >= 1){
                      listadoProductos.push(boletos2Dia+" Pases por 2 días");
                  }
                  if(boletosCompleto >= 1){
                      listadoProductos.push(boletosCompleto+" Pases completos");
                  }
                  if(cantCamisas >= 1){
                      listadoProductos.push(cantCamisas+" camisas");
                  }
                  if(cantEtiquetas >= 1){
                      listadoProductos.push(cantEtiquetas+" etiquetas");
                  }
                  resultado.style.display="block";
                  resultado.innerHTML="";
                  for(var i = 0; i < listadoProductos.length ; i++){
                      resultado.innerHTML += listadoProductos[i] + "<br>";
                  }
                  suma.innerHTML = "$ "+ total.toFixed(2);
              }
          }

          function mostrarDias(){
              var boletosDia = pase_dia.value,
                  boletos2Dia = pase_dosdias.value,
                  boletosCompleto = pase_completo.value;
              var diasElegidos = [];
              if(boletosDia >= 1){
                  diasElegidos.push("viernes");
              }
              if(boletos2Dia >= 1){
                  diasElegidos.push("viernes","sabado");
              }
              if(boletosCompleto >= 1){
                  diasElegidos.push("viernes","sabado", "domingo");
              }
              for(var i = 0 ; i < diasElegidos.length ; i++){
                  document.getElementById(diasElegidos[i]).style.display="block";
              }
          }
      }

    });//DOMContentLoaded fin
})(); //anonima fin

$(document).ready(function(){

  //Programa conferencia
  if(document.getElementById("talleres")){
    $("#talleres").show();
    $("#talleres").addClass("activo");
    $(".menu-programa a").on("click", function(){
      $(".menu-programa a").removeClass("activo");
      $(this).addClass("activo");
      $(".ocultar").hide();
      var enlace = $(this).attr("href");
      $(enlace).fadeIn(1000);
      return false;
    });
  }

  //titulo
  $(".nombre-sitio").lettering();

  //Animacion numeros
  if(document.getElementsByClassName("resumen-evento")){
    $(".resumen-evento").waypoint(function(){
      $(".resumen-evento li:nth-child(1) p").animateNumber({number:6},1200);
      $(".resumen-evento li:nth-child(2) p").animateNumber({number:15},1200);
      $(".resumen-evento li:nth-child(3) p").animateNumber({number:3},1500);
      $(".resumen-evento li:nth-child(4) p").animateNumber({number:9},1500);
    }, {
      offset: "60%"
    });
  }
  //contador
  if(document.getElementsByClassName("cuenta-regresiva")){
    $(".cuenta-regresiva").countdown("2022/01/01 00:00:00", function(event){
      $("#dias").html(event.strftime("%D"));
      $("#horas").html(event.strftime("%H"));
      $("#minutos").html(event.strftime("%M"));
      $("#segundos").html(event.strftime("%S"));
    });
  }

 //menu fijo
 var alturaVentana = $(window).height();
 var alturaBarra = $(".barra").innerHeight();
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll > alturaVentana){
      $(".barra").addClass("fixed");
      // $("body").css({"margin-top": barraAltura+"px"});
    }
      else{
        $(".barra").removeClass("fixed");
        // ("body").css({"margin-top": "0px"});
      }
  });

  //menu Responsive
  $(".menu-movil").on("click",function(){
    $(".navegacion-principal").slideToggle();
  });

  $(".boton_newsletter").colorbox({inline:true, width:"50%"});

});//jQuery*/
