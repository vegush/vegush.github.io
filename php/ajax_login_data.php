<?php

require_once('connect_db.php');

// Подсасываем с формы
$email = $_POST['email'];
$password = $_POST['password'];


// Формируем запрос
$sql_select_email = "SELECT * FROM `users` WHERE email = '$email'";
$sql_select = "SELECT * FROM `users` WHERE email = '$email' AND password = '$password'";


// Получаем ответ
if ($conn->query($sql_select_email)->num_rows == 0) {
    // Нет такой почты
    echo json_encode(['success' => false, 'message' => 'Такой E-mail ещё не зарегестрирован.']);
} else {
    if ($conn->query($sql_select)->num_rows == 0) {
        // Неверный пароль
        echo json_encode(['success' => false, 'message' => 'Неверный пароль.']);
    } else {
        echo json_encode(['success' => true, 'message' => 'Вы успешно авторизованны!']);
    }
}

//echo json_encode(['success' => false, 'message' => $conn->error]);

?>