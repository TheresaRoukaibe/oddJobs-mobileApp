<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: * ');
include "connection.php";


$job_id = $_GET['id'];

$response = [];

if(isset($_GET['id']) && !empty($job_id)){
    $query = $mysqli->prepare("SELECT * FROM applies_to, users WHERE applies_to.job_id=? AND users.id = applies_to.user_id");
    $query->bind_param("i", $job_id);
    $query->execute();
    
    $results = $query->get_result();
    $rows = $results->num_rows;
    
    if($rows ==0){
        $response['status'] = "No one applied to job";
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