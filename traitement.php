<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $to = "flatresjoan@gmail.com";
    $headers = "From: $email\r\nReply-To: $email\r\n";
    $body = "Nom: $name\nEmail: $email\n\nMessage:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message envoyé avec succès !";
    } else {
        echo "Échec de l'envoi du message.";
    }
}
?>