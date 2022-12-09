<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: * ');
include "connection.php";

$_POST = json_decode(file_get_contents('php://input'), true);
$job_id = $_POST['job_id'];
$user_id = $_POST['user_id'];
$response = [];

if(!empty($job_id) && !empty($user_id)){
   
    $query = $mysqli->prepare("SELECT * FROM jobs WHERE id=?");
    $query->bind_param("i", $job_id);
    $query->execute();
    
    $results = $query->get_result();
    $rows = $results->num_rows;
    $job = $results->fetch_assoc();
    $db_user_id = $job['user_id'];

    if($user_id == $db_user_id){
            $response['status'] = "Favorite own job";
    }else{
    
    if($rows ==0){
        $response['status'] = "No job with this id";
    }else{
        $sel_query = $mysqli->prepare("SELECT * FROM saves WHERE user_id = ? AND job_id = ?");
        $sel_query->bind_param("ii", $user_id, $job_id);
        $sel_query->execute();
        $result = $sel_query->get_result();

        if(mysqli_num_rows($result) != 0){
            $response['status'] = "Already saved";
           }else{
       $apply_query = $mysqli->prepare("INSERT into saves(user_id, job_id) VALUES(?,?)");
       $apply_query->bind_param("ii", $user_id, $job_id);
       $apply_query->execute();
       $response['status'] = "User Saved Job";
           }
    }
    }

}else{
    $response['status'] = "User Id missing";
}
echo json_encode($response);
?>