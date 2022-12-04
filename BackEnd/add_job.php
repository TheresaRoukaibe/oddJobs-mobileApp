<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: * ');

include "connection.php";
$response = [];

if(isset($_POST['title']) && isset($_POST['salary']) && isset($_POST['age_requirement']) && isset($_POST['location']) && isset($_POST['description']) && isset($_POST['start_from']) && isset($_POST['end_on']) && isset($_POST['user_id'])){
$title= $_POST['title'];
$salary = $_POST['salary'];
$age_requirement = $_POST['age_requirement'];
$location = $_POST['location'];
$description= $_POST['description'];
$start_from = date('Y-m-d', strtotime($_POST['start_from']));
$end_on = date('Y-m-d', strtotime($_POST['end_on']));
$user_id = $_POST['user_id'];

if(empty($title) || empty($salary) || empty($age_requirement) || empty($location) || empty($description) || empty($start_from) || empty($end_on) || empty($user_id)){
    $response['status'] = "Missing information";
}else{
    
        $query = $mysqli->prepare("INSERT INTO jobs(title, salary, age_requirement, location, description, start_from, end_on, user_id) VALUES (?,?,?,?,?,?,?,?)");
        $query->bind_param("siissssi", $title, $salary, $age_requirement, $location, $description, $start_from, $end_on,  $user_id);
        $query->execute();
    
        $response['status'] = "Job Added";
}


}else{
    $response['status'] = "Missing info";
}


echo json_encode($response);

?>