<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';

if($_SERVER["REQUEST_METHOD"] === 'POST'){
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $company = filter_var($_POST['company'], FILTER_SANITIZE_STRING);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
   
    $mail = new PHPMailer(true);
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

		$mail->isHTML(true);

        $mail->Subject = 'Here is the subject: '. $company;
        $mail->Body    = '<h2>THIS MESSAGE IS SENT FROM:</h2>' . $name . '<br>' .
                        "<h3>NASLOV PORUKE: </h3>" . $company . '<br>' . 
                         "PORUKA:" . "<br>" . 
                         $message;
        $mail->AltBody = 'This is the body in plain text for non-HTML mail clients' . $message;

        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }

}else{
    header('Location:index.php');
}
?>