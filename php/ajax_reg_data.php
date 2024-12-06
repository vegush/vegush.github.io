<?php

require_once('connect_db.php');

// Подсасываем с формы
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];


// Формируем запрос
$sql_select = "SELECT * FROM `users` WHERE email = '$email'";
$sql_insert = "INSERT INTO `users` (name, email, password) VALUES ('$name', '$email', '$password')";


// Получаем ответ
if ($conn->query($sql_select)->num_rows > 0) {
    echo json_encode(['success' => false]);
} else {
    $conn -> query($sql_insert);
    echo json_encode(['success' => true]);
}

?>