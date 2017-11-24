<?php

if (isset($_POST["submit"])) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$tema = $_POST['tema'];
	$message = $_POST['message'];
	$from = "From: $email"; 
	$to = 'darko.tarandek8@gmail.com'; 
		
	$body = "From: $name\n E-Mail: $email\n Message:\n $message";
 
	if (mail ($to, $tema, $body, $from)) {
		$result = '<div class="alert alert-success">Пораката е успешно испратена.</div>!';
		$result = "<meta http-equiv=\"refresh\" content=\"2;URL=contact.html\">";
	} else {
		$result = '<div class="alert alert-danger">Пораката не е испратена.</div>';
	}
}

?>