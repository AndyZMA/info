<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "remodelacionusuarios2";
$port = 3307;

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Verificar conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Recuperar datos del formulario usando $_POST
$nombre = $_POST['nombre'];
$apellidoPaterno = $_POST['apellidoPaterno'];
$apellidoMaterno = $_POST['apellidoMaterno'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

// Preparar la sentencia SQL usando sentencias preparadas
$stmt = $conn->prepare("INSERT INTO users (nombre, apellidoPaterno, apellidoMaterno, correo, telefono, mensaje) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssss", $nombre, $apellidoPaterno, $apellidoMaterno, $correo, $telefono, $mensaje);

// Ejecutar la sentencia
if ($stmt->execute()) {
    echo "Nuevo registro creado exitosamente";
} else {
    echo "Error: " . $stmt->error;
}

// Cerrar sentencia y conexión
$stmt->close();
$conn->close();
?>
