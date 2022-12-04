<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: * ');

include "connection.php";

$user_id = $_GET['id'];
$response = [];

if(isset($_GET['id']) && !empty($user_id)){
    $query = $mysqli->prepare("SELECT * FROM users,jobs WHERE users.id=? AND jobs.user_id = users.id");
    $query->bind_param("i", $user_id);
    $query->execute();
    
    $results = $query->get_result();
    $rows = $results->num_rows;
    
    if($rows ==0){
        $response['status'] = "User has not posted jobs yet";
    }else{
        while($user = $results->fetch_assoc()){
            $response[] = $user;
        }
    
    }
}else{
    $response['status'] = "User Id missing";
}

echo json_encode($response);
?>
