<?php
if(isset($_POST["message"])){
    $retour = mail("nathan.75@outlook.com",$_POST["message"],$_POST["sujet"],"Reply-to" . $_POST["email"]);
if($retour){
    echo "<p>L'email a bien été envoyé.<p>";
}


}

?>
