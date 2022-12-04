<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: * ');

include "connection.php";
$response = [];

if(isset($_POST['username']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['gender']) && isset($_POST['dob']) && isset($_POST['address']) && isset($_POST['number'])){
$name = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$hashed_pass = password_hash($password, PASSWORD_DEFAULT);
$gender = $_POST['gender'];
$dob = date('Y-m-d', strtotime($_POST['dob']));
$address= $_POST['address'];
$number= $_POST['number'];

if(empty($name) || empty($email) || empty($password) || empty($gender) || empty($dob) || empty($address) || empty($number)){
    $response['status'] = "Missing information";
}else{
    $verify = "SELECT * FROM users WHERE email='$email'";
    $verify = mysqli_query($mysqli, $verify);
    
    if(mysqli_num_rows($verify) == 0){
        //email is free to use, proceed to registration
        $query = $mysqli->prepare("INSERT INTO users(username, email, password, dob, address, gender, number) VALUES (?,?,?,?,?,?,?)");
        $query->bind_param("sssssss", $name, $email, $hashed_pass, $dob, $address, $gender,  $number);
        $query->execute();
    
    
        $response['status'] = "User registered";
    
    
        
    }else{
        $response['status'] = "Email exists";
    }
}


}else{
    $response['status'] = "Missing info";
}


echo json_encode($response);

?>