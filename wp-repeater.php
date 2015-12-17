<?php
if( have_rows('repeater_field_name') ):
	while ( have_rows('repeater_field_name') ) : the_row();
		the_sub_field('sub_field_name');
	endwhile;
endif;
?>
