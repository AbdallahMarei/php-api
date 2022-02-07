<?php 
include("db.php");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods: *');
header("Content-Type: application/json");
?>


<?php 
if ($_SERVER['REQUEST_METHOD'] === 'GET'){ 
$users = "SELECT * FROM users";
if(isset($_GET["yaser"])){
    $users .= " WHERE id={$_GET["yaser"]}";
    $users = $connection->prepare($users);
    $users->execute();
$result = $users->fetchAll(PDO::FETCH_ASSOC);
} else {
    $users = $connection->prepare($users);
    $users->execute();
    $result = $users->fetchAll(PDO::FETCH_ASSOC);
}
echo json_encode($result);
} elseif($_SERVER['REQUEST_METHOD'] === 'POST'){
    
}
?>

