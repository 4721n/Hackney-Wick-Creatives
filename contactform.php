
<?php 
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $message = $_POST["message"];

    $mailTo = "hackneywickcreatives@gmail.com, hello@hackneywickcreatives.co.uk";
    $headers = "From: ".$email." via hackneywickcreatives.co.uk";
    $txt = "You have a message from ".$name.".\n\n".$message;

    mail($mailTo,$headers,$txt);
    header("Location: index.html?mailsend#contact-id");

}
