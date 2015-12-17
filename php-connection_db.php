<?php
try {
	$bdd = new PDO('mysql:host=localhost;dbname=nom_base_de_donnee', 'utilisateur', 'mdp') or die(print_r($bdd->errorInfo()));
	$bdd->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_WARNING); // On émet une alerte à chaque fois qu'une requête a échoué.
	$bdd->exec('SET NAMES utf8');
}
catch (Exception $e) {
	die('Erreur : ' . $e->getMessage());
}
?>
