<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: * ');
include "connection.php";


$user_id = $_GET['id'];

$response = [];

if(!empty($user_id)){
    $query = $mysqli->prepare("SELECT * FROM jobs, saves WHERE jobs.id=saves.job_id AND saves.user_id=?");
    $query->bind_param("i", $user_id);
    $query->execute();
    
    $results = $query->get_result();
    $rows = $results->num_rows;
    
    if($rows ==0){
        $response['status'] = "No saves for this user";
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