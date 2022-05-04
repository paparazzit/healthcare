<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';

if($_SERVER["REQUEST_METHOD"] === 'POST'){
    $name = filter_var(htmlspecialchars($_POST['name']), FILTER_SANITIZE_STRING);
    // $name= htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $job = filter_var(htmlspecialchars($_POST['job']), FILTER_SANITIZE_STRING);
    $location = filter_var(htmlspecialchars($_POST['location']), FILTER_SANITIZE_STRING);
    $message = filter_var(htmlspecialchars($_POST['message']), FILTER_SANITIZE_STRING);
    // $message = htmlspecialchars($_POST['message']);
    $file = $_FILES['fileName'];
    
    // echo json_encode($file);
   if($file['size']< 3000000){
    $mail = new PHPMailer(true);
   echo $name;
    try {

           
        $mail->SMTPDebug = false;                      //Enable verbose debug output
                        
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'mail.srdjansrdjanov.info';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'office@srdjansrdjanov.info';                     //SMTP username
        $mail->Password = '3zpbA,=,lwb%';                            //SMTP password
        // $mail->SMTPSecure = "ssl";   
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; 
        $mail->Port       =465 ;      
        // $mail->Port       =587 ;      
        //Recipients
       
		$mail->From = $email;

		$mail->FromName = $name;

		$mail->addAddress('office@srdjansrdjanov.info');
        $mail->addAttachment($file['tmp_name'], $file['name']);
		$mail->isHTML(true);
        $mail->CharSet = 'UTF-8';
        $mail->Subject = 'Aplikacija za posao od: '. $name;
        $mail->Body    = '<h2>Aplikaciju za posao je poslao:</h2>' . $name . '<br>' .
                        "<h3>Aplicira za poziciju: </h3>" . $job . '<br>' . 
                        "<h3>Aplicira za Lokaciju: </h3>" . $location . '<br>' . 
                         "<h3>PORUKA: </h3>" . "<br>" . 
                         $message  ;
        $mail->AltBody = 'This is the body in plain text for non-HTML mail clients' . $message;

        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
      
    }
   }else{
       echo 'File is to large';
       return;
   }
   
   

}
else{
    header('Location:index.php');
}
?>