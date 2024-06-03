<?php

/**
 * Import PHPMailer classes into the global namespace
 * hese must be at the top of your script, not inside a function
 * @link https://github.com/PHPMailer/PHPMailer
 */

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER; //Enable verbose debug output
    $mail->isSMTP();
    $mail->SMTPAuth   = true;   //Enable SMTP authentication
    $mail->Host       = 'your_smtp_server'; //Set the SMTP server to send through
    $mail->Username   = 'your_smtp_mail'; //SMTP username
    $mail->Password   = 'your_smtp_mail_password';
    $mail->SMTPSecure = 'tls'; // tls or ssl
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 587; // 25, 465, 587, and 2525

    //Recipients
    $mail->setFrom($mail->Username, 'My smtp server');
    $mail->addAddress('your_to_send@gmail.com', 'Saeed ');

    //Content
    $mail->isHTML(true);
    $mail->Subject = 'My smtp server testing';
    $mail->Body    = 'Please check your inbox or spam for confirm connection';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
