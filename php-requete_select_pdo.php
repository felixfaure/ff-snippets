<?php
	//Boucle
	$req = $bdd->prepare('SELECT * FROM table WHERE id=:table_id AND prix<=:prixmax');
	$req->execute(array(':table_id'=>htmlentities($_POST['id']), ':prixmax'=>htmlentities($_POST['prix'])));
	while ($data = $req->fetch(PDO::FETCH_OBJ)) {
		echo $data->id;
		echo '<br/>';
	}

	//Une ligne
	$req = $bdd->prepare('SELECT * FROM table WHERE id=:table_id');
	$req->execute(array(':table_id'=>htmlentities($_POST['id'])));
	$data = $req->fetch(PDO::FETCH_OBJ);
	if(!$data) echo 'Pas de résultat !';
	else echo $data->id;
?>
