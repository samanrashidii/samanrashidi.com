<?php

	if(isset($_POST['full_name'])) {

		$to .= 'me@samanrashidi.com';
		
		// subject
		$subject = 'Samanrashidi.com: ' . $_POST['full_name'];
		
		// message
		$message = '<strong>Message from contact me section</strong><br />
					<h4>This is the email from:</h4><br />
					<strong>Name :</strong> ' . $_POST['full_name'] . '<br /><br />
					<strong>Email :</strong> ' . $_POST['email_address'] . '<br /><br />
					<strong>Mobile Number :</strong> ' . $_POST['mobile_number'] . '<br /><br />
					<strong>Field of Activity :</strong> ' . $_POST['field_of_activity'] . '<br /><br />
					<strong>Subject :</strong> ' . $_POST['subject'] . '<br /><br />
					<strong>Message to me :</strong> ' . $_POST['message'];
		
		// To send HTML mail, the Content-type header must be set
		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
		
		// Additional headers
		$headers .= 'From: ' . $_POST['full_name'] . ' <noreply@samanrashidi.com>' . "\r\n";
		$headers .= 'Reply-To: ' .$_POST['email_address'] . "\r\n";
		
		// Mail it
		mail($to, $subject, $message, $headers);
	}
?>
