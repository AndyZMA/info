<?php
// Parámetros de conexión a la base de datos
$servername = "localhost"; // Ajusta según sea necesario
$username = "root"; // Usuario de la base de datos
$password = "root"; // Contraseña del usuario
$dbname = "usuarios_retiro"; // Nombre de la base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Recuperar datos del formulario usando $_POST
$nombre = $_POST['nombre'];
$apellidoPaterno = $_POST['apellidoPaterno'];
$apellidoMaterno = $_POST['apellidoMaterno'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

// Preparar la sentencia SQL usando sentencias preparadas
$stmt = $conn->prepare("INSERT INTO tb_users (nombre, apellidoPaterno, apellidoMaterno, email, telefono, mensaje) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssss", $nombre, $apellidoPaterno, $apellidoMaterno, $email, $telefono, $mensaje);

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
