<?php
$continents = array(
  'amerique' => 'Amérique',
  'asie' => 'Asie',
  'europe' => 'Europe',
  'afrique' => 'Afrique',
  'oceanie' => 'Océanie',
  'antarctique' => 'Antarctique'
);

//Pour ajouter à une taxo WP :
foreach ($continents as $slug => $name) {
	wp_insert_term( $name, 'localisation', array('slug' => $slug) );
}
?>
