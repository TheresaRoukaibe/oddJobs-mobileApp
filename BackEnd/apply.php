<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: * ');
include "connection.php";

$job_id = $_POST['job_id'];
$user_id = $_POST['user_id'];
$response = [];



if((isset($_POST['job_id']) && !empty($job_id)) || (isset($_POST['user_id']) && !empty($user_id))){
   
    $query = $mysqli->prepare("SELECT * FROM jobs WHERE id=?");
    $query->bind_param("i", $job_id);
    $query->execute();
    
    $results = $query->get_result();
    $rows = $results->num_rows;
    $job = $results->fetch_assoc();
    $db_user_id = $job['user_id'];

    if($user_id == $db_user_id){
            $response['status'] = "Applying to own job";
    }else{
    
    if($rows ==0){
        $response['status'] = "No job with this id";
    }else{
       $apply_query = $mysqli->prepare("INSERT into applies_to(user_id, job_id) VALUES(?,?)");
       $apply_query->bind_param("ii", $user_id, $job_id);
       $apply_query->execute();
       $response['status'] = "User Applied for Job";
    }
    }

}else{
    $response['status'] = "User Id missing";
}





echo json_encode($response);
?>