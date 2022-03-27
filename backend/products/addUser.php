<?php 
include("db.php");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods: *');
header("Content-Type: application/json");
?>


<?php 
$data = json_decode(file_get_contents("php://input"));
$sql = "INSERT INTO users(name,phone,email,password) VALUES (:name, :phone, :email, :password)";
$stmt = $connection->prepare($sql);
$stmt->bindParam(':name', $data->name);
$stmt->bindParam(':email', $data->email);
$stmt->bindParam(':phone', $data->phone);
$stmt->bindParam(':password', $data->password);
$stmt->execute();
echo json_encode($data);
?>