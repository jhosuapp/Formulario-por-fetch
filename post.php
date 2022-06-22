<?php

    $usuario = $_POST['usuario'];
    $contraseña = $_POST['contraseña'];


    echo json_encode([$usuario, $contraseña]);

?>