<?php
$args = array(
	'posts_per_page' => -1,
	'post_type'      => 'post',
	'meta_key' => 'actu_date',
	'orderby' => 'actu_date',
	'order' => 'ASC',
	'meta_query' => array(
		array(
			'key' => 'actu_date',
			'value' => date('Ymd'),
			'compare' => '>=',
			'type' => 'DATE',
			'orderby' => 'actu_date',
			'order' => 'ASC'
		),
	)
);
$postsList = new WP_Query($args);
if($postsList->have_posts()) :
	while($postsList->have_posts()) : $postsList->the_post();

	endwhile;
	wp_reset_postdata();
else:
	echo '<p>'.__('Aucun article...','davdev').'</p>';
endif;
?>
