<?php include_once "includes/templates/header.php" ?>
  <section class="seccion contenedor">
    <h2>La mejor conferencia de diseño web en español</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </section> <!-- seccion -->

  <section class="programa">
    <div class="contenedor-video">
      <video autoplay loop poster="img/bg-talleres.jpg">
        <source src="video/video.mp4" type="video/mp4">
          <source src="video/video.ogv" type="video/ogv">
      </video>
    </div><!-- contenedor video -->
    <div class="contenido-programa">
      <div class="contenedor">
        <div class="programa-evento">
          <h2>Programa del Evento</h2>
          <nav class="menu-programa">
              <a href="#talleres"><i class="fas fa-code"></i>Talleres</a>
              <a href="#conferencia"><i class="fas fa-comment"></i>Conferencias</a>
              <a href="#seminarios"><i class="fas fa-university"></i>Seminarios</a>
          </nav>
          <div id="talleres" class="info-curso ocultar clearfix">
              <div class="detalle-evento">
                <h3>HTML5, CSS5 y JavaScript</h3>
                <p><i class="fas fa-clock"></i>16:00 hrs</p>
                <p><i class="fas fa-calendar"></i>10 de Octubre</p>
                <p><i class="fas fa-user"></i>Juan Manuel Echeverria</p>
              </div>
              <div class="detalle-evento">
                <h3>Responsive Web Design</h3>
                <p><i class="fas fa-clock"></i>20:00 hrs</p>
                <p><i class="fas fa-calendar"></i>10 de Octubre</p>
                <p><i class="fas fa-user"></i>Juan Manuel Echeverria</p>
              </div>
              <a href="#" class="button float-right">Ver todos</a>
          </div><!-- talleres -->
          <div id="conferencia" class="info-curso ocultar clearfix">
              <div class="detalle-evento">
                <h3>Interfaces para moviles</h3>
                <p><i class="fas fa-clock"></i>16:00 hrs</p>
                <p><i class="fas fa-calendar"></i>11 de Octubre</p>
                <p><i class="fas fa-user"></i>Homero Thompson</p>
              </div>
              <div class="detalle-evento">
                <h3>Condensadores de flujo</h3>
                <p><i class="fas fa-clock"></i>20:00 hrs</p>
                <p><i class="fas fa-calendar"></i>11 de Octubre</p>
                <p><i class="fas fa-user"></i>Hemmet Brown</p>
              </div>
              <a href="#" class="button float-right">Ver todos</a>
          </div><!-- talleres -->
          <div id="seminarios" class="info-curso ocultar clearfix">
              <div class="detalle-evento">
                <h3>Como se Freelancer</h3>
                <p><i class="fas fa-clock"></i>10:00 hrs</p>
                <p><i class="fas fa-calendar"></i>10 de Octubre</p>
                <p><i class="fas fa-user"></i>Gregory Sanches</p>
              </div>
              <div class="detalle-evento">
                <h3>Tecnologias del futuro</h3>
                <p><i class="fas fa-clock"></i>20:00 hrs</p>
                <p><i class="fas fa-calendar"></i>10 de Octubre</p>
                <p><i class="fas fa-user"></i>Susana Sanchez</p>
              </div>
              <a href="#" class="button float-right">Ver todos</a>
          </div><!-- talleres -->
        </div><!-- programa-evento -->
      </div><!-- contenedor -->
    </div><!-- contenido programa -->
  </section><!-- programa -->

  <section class="invitados contenedor seccion">
    <h2>Nuestros invitados</h2>
    <ul class="lista-invitados clearfix">
      <li>
        <div class="invitado">
          <img src="img/invitado1.jpg" alt="imagen invitado">
          <p>Rafael Bautista</p>
        </div>
      </li>
      <li>
        <div class="invitado">
          <img src="img/invitado2.jpg" alt="imagen invitado">
          <p>Malena Gonzales</p>
        </div>
      </li>
      <li>
        <div class="invitado">
          <img src="img/invitado3.jpg" alt="imagen invitado">
          <p>Paul Gomez</p>
        </div>
      </li>
      <li>
        <div class="invitado">
          <img src="img/invitado4.jpg" alt="imagen invitado">
          <p>Veronica Lozano</p>
        </div>
      </li>
      <li>
        <div class="invitado">
          <img src="img/invitado5.jpg" alt="imagen invitado">
          <p>Steve Magal</p>
        </div>
      </li>
      <li>
        <div class="invitado">
          <img src="img/invitado6.jpg" alt="imagen invitado">
          <p>Alejandra Gimenez</p>
        </div>
      </li>
    </ul>
  </section><!--invitados-->
  <div class="contador parallax">
    <div class="contenedor">
      <ul class="resumen-evento clearfix">
        <li><p class="numero">0</p>Invitados</li>
        <li><p class="numero">0</p>Talleres</li>
        <li><p class="numero">0</p>Dias</li>
        <li><p class="numero">0</p>Conferencias</li>
      </ul>
    </div>
  </div> <!--parallax-->
  <section class="precios seccion">
    <h2>Precios</h2>
    <div class="contenedor">
      <ul class="lista-precios clearfix">
        <li>
          <div class="tabla-precio">
            <h3>Pase por dia</h3>
            <p class="numero">$30</p>
            <ul>
              <li>Bocadillos gratis</li>
              <li>Todas las conferencias</li>
              <li>Todas las conferencias</li>
            </ul>
            <a href="#" class="button hollow">Comprar</a>
          </div>
        </li>
        <li>
          <div class="tabla-precio">
            <h3>Todos los dias</h3>
            <p class="numero">$50</p>
            <ul>
              <li>Bocadillos gratis</li>
              <li>Todas las conferencias</li>
              <li>Todas las conferencias</li>
            </ul>
            <a href="#" class="button">Comprar</a>
          </div>
        </li>
        <li>
          <div class="tabla-precio">
            <h3>Pase por 2 dia</h3>
            <p class="numero">$45</p>
            <ul>
              <li>Bocadillos gratis</li>
              <li>Todas las conferencias</li>
              <li>Todas las conferencias</li>
            </ul>
            <a href="#" class="button hollow">Comprar</a>
          </div>
        </li>
      </ul>
    </div>
  </section><!--precios-->
  <div id="mapa" class="mapa"></div>

  <section class="seccion">
    <h2>Testimoniales</h2>
      <div class="testimoniales contenedor clearfix">
        <div class="testimonial">
          <blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                 ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <footer class="info-testimonial clearfix">
              <img src="img/testimonial.jpg" alt="imagen testimonial">
              <cite>Oswaldo Aponte Escobar <span>Diseñador en @prisma</span></cite>
            </footer>

          </blockquote>
        </div><!--testimonial-->
        <div class="testimonial">
          <blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                 ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <footer class="info-testimonial clearfix">
              <img src="img/testimonial.jpg" alt="imagen testimonial">
              <cite>Oswaldo Aponte Escobar <span>Diseñador en @prisma</span></cite>
            </footer>
          </blockquote>
        </div><!--testimonial-->
        <div class="testimonial">
          <blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                 ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <footer class="info-testimonial clearfix">
              <img src="img/testimonial.jpg" alt="imagen testimonial">
              <cite>Oswaldo Aponte Escobar <span>Diseñador en @prisma</span></cite>
            </footer>
          </blockquote>
        </div><!--testimonial-->
      </div>
  </section><!--testimonialesssss-->
  <div class="newsletter parallax">
    <div class="contenido contenedor">
      <p>registrate al newsletter</p>
      <h3>IRRH</h3>
      <a href="#mc_embed_signup" class="boton_newsletter button transparente">Registro</a>
    </div>
  </div><!--newsleter-->

  <section class="seccion">
    <h2>Faltan</h2>
    <div class="cuenta-regresiva contenedor">
      <ul class="clearfix">
        <li><p id="dias" class="numero"></p> dias</li>
        <li><p id="horas" class="numero"></p> horas</li>
        <li><p id="minutos" class="numero"></p> minutos</li>
        <li><p id="segundos" class="numero"></p> segundos</li>
      </ul>
    </div>
  </section>
<?php include_once "includes/templates/footer.php" ?>
