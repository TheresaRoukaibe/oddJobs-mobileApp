<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: * ');

include "connection.php";
$response = [];

if(isset($_GET['id'])){
$id = $_GET['id'];

if(empty($id)){
    $response['status'] = "Missing Id";
}else{
    $verify = $mysqli->prepare("SELECT * FROM jobs WHERE id=?");
    $verify->bind_param("i", $id);
    $verify->execute();

    $results = $verify->get_result();
   $rows = $results->num_rows;
    
    if($rows != 0){
        $query_del = $mysqli->prepare("DELETE FROM jobs WHERE id=?");
        $query_del->bind_param("i", $id);
        $query_del->execute();

        $query_apply = $mysqli->prepare("DELETE FROM applies_to WHERE job_id=?");
        $query_apply->bind_param("i", $id);
        $query_apply->execute();

        $query_hire = $mysqli->prepare("DELETE FROM hires WHERE job_id=?");
        $query_hire->bind_param("i", $id);
        $query_hire->execute();

        $query_saves = $mysqli->prepare("DELETE FROM saves WHERE job_id=?");
        $query_saves->bind_param("i", $id);
        $query_saves->execute();


        $response['status'] = "Job deleted";
    
    
        
    }else{
        $response['status'] = "No Job Found";
    }
}


}else{
    $response['status'] = "Missing info";
}


echo json_encode($response);

?>