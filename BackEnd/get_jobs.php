<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: * ');

include "connection.php";
$response = [];

$query = $mysqli->prepare("SELECT * FROM jobs");
$query->execute();
$results = $query->get_result();
$rows = $results->num_rows;
if($rows ==0){
    $response['status'] = "No jobs available";
}else{
    while($job = $results->fetch_assoc()){
        $response[] = $job;
    }


}

echo json_encode($response);
?>