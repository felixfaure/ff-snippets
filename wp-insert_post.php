<?php
$pages_to_add = array(
	"Contact",
	"Mentions légales & Crédits",
	"Plan du site",
	"Newsletter",
);
foreach ($pages_to_add as $k => $page_to_add) {
	$my_post = array(
	  'post_title'    => wp_strip_all_tags( $page_to_add ),
	  'post_content'  => '',
	  'post_status'   => 'publish',
		'post_type'			=> 'page',
	  'comment_status' => 'closed',
		'post_parent' 	=> 0,
		'menu_order'		=> ($k * 100 + 800)
	);

	// Insert the post into the database
	wp_insert_post( $my_post );
}
?>
