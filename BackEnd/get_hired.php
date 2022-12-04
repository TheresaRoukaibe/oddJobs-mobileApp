<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: * ');
include "connection.php";


$user_id = $_GET['id'];

$response = [];

if(isset($_GET['id']) && !empty($user_id)){
    $query = $mysqli->prepare("SELECT * FROM users, hires WHERE users.id=hires.user_id AND hires.user_hired_id=?");
    $query->bind_param("i", $user_id);
    $query->execute();
    
    $results = $query->get_result();
    $rows = $results->num_rows;
    
    if($rows ==0){
        $response['status'] = "No one hired user";
    }else{
        while($job = $results->fetch_assoc()){
            $response[] = $job;
        }
    
    
    }
}else{
    $response['status'] = "Id missing";
}



echo json_encode($response);
?>