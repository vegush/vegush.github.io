<?php

require_once('connect_db.php');

$sql_select_items = "SELECT * FROM `items`";
$result = $conn->query($sql_select_items);

$prepared_items = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $prepared_items[] = $row;
    }
}

$conn->close();

header('Content-Type: application/json');
echo json_encode($prepared_items);
?>