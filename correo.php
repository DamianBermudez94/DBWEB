<?php
$destinatario = "bermudezdamian7@gmail.com";
$nombre=$_POST["nombre"];
$correo=$_POST["correo"];
$telefono=$_POST["telefono"];
$mensaje=$_POST["mensaje"]

$mensaje=$_POST["mensaje"];
$contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nTelefono: " . $telefono . "\nMensaje: " . $mensaje;
mail($destinatario,"Contacto", $contenido);
header("Locacion:index.html");




?>