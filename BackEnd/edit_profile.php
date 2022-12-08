<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: * ');

include "connection.php";
$response = [];
$_POST = json_decode(file_get_contents('php://input'), true);

if(isset($_POST['user_id']) && isset($_POST['username']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['address']) && isset($_POST['number'])){
$id = $_POST['user_id'];
$name = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$hashed_pass = password_hash($password, PASSWORD_DEFAULT);
$address= $_POST['address'];
$number= $_POST['number'];

if(empty($id) || empty($name) || empty($email) || empty($password) || empty($address) || empty($number)){
    $response['status'] = "Missing information";
}else{
    $verify = "SELECT * FROM users WHERE email='$email'";
    $verify = mysqli_query($mysqli, $verify);
    

    if(mysqli_num_rows($verify) == 0){
        //email is free to use, proceed to changing profile
        $query = $mysqli->prepare("UPDATE users SET username=?, email=?, password=?, address=?, number=? WHERE id=?");
        $query->bind_param("sssssi", $name, $email, $hashed_pass, $address, $number, $id);
        $query->execute();
    
    
        $response['status'] = "User Info edited";
    
    }else{
        $response['status'] = "Email exists";
    }
}


}else{
    $response['status'] = "Missing info";
}


echo json_encode($response);

?>