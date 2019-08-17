  <!-- 
    This php file contains the backend for the email form 
    If the email was sent succesful the page is redirected to /succes
    On failure the user is redirected to /mislukt
  -->
  <?php
  $to = "contact@jonasdevrient.be"; // uw mail adres

  $from = $_POST['email']; // afzenders mail adres

  $name = $_POST['name'];

  $message = $name . " " . "schreef het volgende:" . "\n\n" . $_POST['message'];
  $message2 = "U heeft het volgende verstuurd naar" . " " . $to  . "\n\n" . $_POST['message'] . "\n\n U kunt binnenkort een antwoord verwachten.";

  $headers = "From:" . $from;
  $headers2 = "From:" . $to;

  if (empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message'])) {
    http_response_code(404);
  } else {
    mail($to, '[Contact formulier] ' . $name . ' heeft iets geschreven', $message, $headers);
    // sends a copy of the message to the sender
    mail($from, 'Kopie van contact formulier', $message2, $headers2);
    http_response_code(200);
  }
