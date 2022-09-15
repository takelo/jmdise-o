<?php include_once "includes/templates/header.php" ?>
  <section class="seccion contenedor">
    <h2>calendario eventos</h2>

    <?php
      try{
        require_once("includes/funciones/connection.php");
        //$sql= "SELECT * FROM eventos";
        $sql = "SELECT eventos.id, eventos.nombre AS nomEv, eventos.fecha, eventos.hora, categoria_evento.categoria,
        invitados.nombre, invitados.apellido ";
        $sql .="FROM eventos ";
        $sql .="INNER JOIN categoria_evento ";
        $sql .="ON eventos.id_categoria_fk = categoria_evento.id ";
        $sql .="INNER JOIN invitados ";
        $sql .="ON eventos.id_invitado_fk = invitados.id ";
        $sql .="ORDER BY id ";
        $resultado = $conn->query($sql);
      } catch(\Exception $e){
        echo $e->getMessage();
      }
    ?>
    <div class="calendario clearfix">

        <?php
          //creo el arreglo
          $calendario = array();
          while($eventos = $resultado->fetch_assoc()){
            //obtengo la fecha del evento
            $fecha = $eventos["fecha"];
            $evento = array(
              "titulo" => $eventos["nomEv"],
              "fecha" => $eventos["fecha"],
              "hora" => $eventos["hora"],
              "categoria" => $eventos["categoria"],
              "icono" => "fa ".$eventos["icono"],
              "invitado" => $eventos["nombre"] . " " . $eventos["apellido"]
            );
            $calendario[$fecha][]=$evento;
          };
        ?>
        <?php
          //muestro los datos
          foreach ($calendario as $dia => $lista_eventos) { ?>
            <h3>
              <i class="fa fa-calendar"></i>
              <?php
                setlocale(LC_TIME, "es_ES.UTF-8");
                setlocale(LC_TIME, "spanish");
                echo strftime("%A, %d de %B del %Y", strtotime($dia));
              ?>
            </h3>
            <?php
              foreach ($lista_eventos as $evento) {?>
                <div class="dia">
                  <p class="titulo"><?php echo $evento["titulo"]; ?></p>
                  <p class="hora">
                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                    <?php echo $evento["fecha"]. " ".$evento["hora"]; ?>
                  </p>
                  <p>
                    <i class="<?php echo $evento["icono"]; ?>" aria-hidden="true"></i>
                    <?php echo $evento["categoria"]; ?>
                  </p>
                  <p class="hora">
                    <i class="fa fa-user" aria-hidden="true"></i>
                    <?php echo $evento["invitado"]; ?>
                  </p>
                </div>
              <?php } //llave eventos?>
            <?php } //llave dias ?>



    </div>
    <?php
      $conn->close();
     ?>
  </section> <!-- seccion -->
  <?php include_once "includes/templates/footer.php" ?>
