<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: * ');

$job_id = $_GET['id'];

include "connection.php";
$response = [];

if(isset($_GET['id']) && !empty($job_id)){
    $query = $mysqli->prepare("SELECT * FROM jobs WHERE id=?");
    $query->bind_param("i", $job_id);
    $query->execute();
    
    $results = $query->get_result();
    $rows = $results->num_rows;
    
    if($rows ==0){
        $response['status'] = "No job with this id";
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