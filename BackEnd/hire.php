<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: * ');
include "connection.php";
$_POST = json_decode(file_get_contents('php://input'), true);
$job_id = $_POST['job_id'];
$user_id = $_POST['user_id'];
$user_hired_id = $_POST['user_hired_id'];
$response = [];

if((isset($_POST['job_id']) && !empty($job_id)) || (isset($_POST['user_id']) && !empty($user_id)) || (isset($_POST['user_hired_id']) && !empty($user_hired_id))){
   $verify = $mysqli->prepare("SELECT * FROM hires WHERE user_hired_id = ? AND job_id =?");
   $verify->bind_param("ii", $user_hired_id, $job_id);
   $verify->execute();

   $results = $verify->get_result();
   $rows = $results->num_rows;
if($rows == 0){
    $query = $mysqli->prepare("INSERT INTO hires(user_id, user_hired_id, job_id) VALUES(?,?,?)");
    $query->bind_param("iii", $user_id, $user_hired_id, $job_id);
    $query->execute();
       $response['status'] = "User Hired";
    
}else{
    $response['status'] = "User Already hired";
}

}else{
    $response['status'] = "User Id missing";
}
echo json_encode($response);
?>