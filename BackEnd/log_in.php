<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: * ');

include "connection.php";
$response = [];

$_POST = json_decode(file_get_contents('php://input'), true);

if(isset($_POST['email']) && isset($_POST['password'])){
    $email = $_POST['email'];
    $password = $_POST['password'];
    $hashed_pass = password_hash($password, PASSWORD_DEFAULT);

    if(empty($email) || empty($password)){
        $response['status'] = "Missing information";
    }else{
    $query = $mysqli->prepare("SELECT * FROM users WHERE email=?");
    $query->bind_param("s", $email);
    $query->execute();
    $results = $query->get_result();
    $rows = $results->num_rows;
    
    if($rows==0){
        $response['status'] = "Account not found";
    }else{
        $user = $results->fetch_assoc();
        $user_email = $user['email'];
        $user_pass = $user['password'];
        if(password_verify($password, $user_pass)){
            $response['status'] = $user['id'];

        }else{
            $response['status'] = 'Wrong password';
        }
    }
    }

}else{
    $response['status'] = "Missing information";
}

echo json_encode($response);
?>