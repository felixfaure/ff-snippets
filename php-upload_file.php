<?php

//Vérifications
$errorFile=false;
$errorExt=false;
$errorSize=false;
if(!empty($_FILES['image']['name'])) {
	$ext = strtolower(pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION));
	$tmpFile = $_FILES['image']['tmp_name'];
	$taille_maxi = 100000; //En octets (bytes)
	$file_size = filesize($tmpFile);
	$errorExt = $ext != 'jpg' && $ext != 'png' && $ext != 'jpeg' ? 'Mauvaise extension !' : false;
	$errorSize = $file_size>$taille_maxi ? 'Fichier trop lourd !' : false;
} else {
	$errorFile='Pas de fichier';
}

$errors = array($errorFile, $errorExt, $errorSize); //Tableau des erreurs

//Si pas d'erreur on copie le fichier
if(!array_filter($errors)) {
	$path = 'uploads/';
	$filename = $path.uniqid().'.'.$ext;
	if(move_uploaded_file($tmpFile, $filename)) {
		$success='Le fichier a été déplacé !';
	}
}

//Affichage messages erreur ou succès
if(isset($success)) echo '<div class="alert-success">'.$success.'</div>';
elseif(isset($errors) && array_filter($errors)) {
	echo'<div class="alert-error">';
	foreach($errors as $e) {
		echo '<p>'.$e.'</p>';
	}
	echo '</div>';
}

?>
