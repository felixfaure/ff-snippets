<?php
//================================================================================================
//xxx_name_maj_singular : Ajout du custom post type

//-------------------------------------
//Intitulés pour rechercher/remplacer :
//-------------------------------------
//xxx_slug_plural (books) (capability_type plural)
//xxx_slug_singular (book) (function, post type name, capability_type singular)
//xxx_name_plural (livres)
//xxx_name_singular (livre)
//xxx_name_maj_plural (Livres)
//xxx_name_maj_singular (Livre)

//xxx_word_le ("le " ou "la " ou "l’")
//xxx_word_nouveau_maj ("Nouveau" ou "Nouvelle" ou "Nouvel")
//xxx_word_tous_maj ("Tous" ou "Toutes")
//xxx_word_du ("du " ou "de la " ou "de l’")
//eeee (pour ajouter un e aux mots, exemple : une, aucune, trouvée)
//================================================================================================
function my_custom_post_type_xxx_slug_singular() {
	$labels = array(
		'name'               => _x( 'xxx_name_maj_plural', 'post type general name', 'wpst' ),
		'singular_name'      => _x( 'xxx_name_maj_singular', 'post type singular name', 'wpst' ),
		'add_new_item'       => __( 'Ajouter uneeee xxx_name_singular', 'wpst' ),
		'new_item'           => __( 'xxx_word_nouveau_maj xxx_name_singular', 'wpst' ),
		'edit_item'          => __( 'Modifier', 'wpst' ),
		'view_item'          => __( 'Voir xxx_word_lexxx_name_singular', 'wpst' ),
		'view_items'         => __( 'Voir les xxx_name_plural', 'wpst' ),
		'all_items'          => __( 'xxx_word_tous_maj les xxx_name_plural', 'wpst' ),
		'search_items'       => __( 'Rechercher uneeee xxx_name_singular', 'wpst' ),
		'not_found'          => __( 'Aucuneeee xxx_name_singular trouvéeeee', 'wpst' ),
		'not_found_in_trash' => __( 'Aucuneeee xxx_name_singular dans la corbeille', 'wpst' ),
		// 'parent_item_colon'  => '', //Seulement si hierarchical
		'archives'					 => __( 'Archives des xxx_name_plural', 'wpst' ),
	);
	$args = array(
		'labels' => $labels,
		'public' => true, //= false
		// 'exclude_from_search' => true, //= !public
		// 'publicly_queryable' => false, //= public
		// 'show_ui' => false, //= public
		'show_in_nav_menus' => false, //= public
		// 'show_in_menu' => false, //= show_ui
		// 'show_in_admin_bar' => false, //= show_in_menu
		// 'menu_position' => 10, //= 5
		'menu_icon' => 'dashicons-admin-post',
		'map_meta_cap'  => true,
		'capability_type' => array('xxx_slug_singular', 'xxx_slug_plural'),
		// 'hierarchical' => true, //= false
		'supports' => array('title','editor','revisions'), //= title and editor
		// 'taxonomies' => array('category'),
		// 'has_archive'	=> true, //= false
		'rewrite' => true,
	);
	register_post_type( 'xxx_slug_singular', $args );

	// add_permastruct( 'xxx_slug_singular', '/%saison%/%xxx_slug_singular%', false );
	// add_permastruct( 'xxx_slug_singular', '/blablabla/%xxx_slug_singular%', false );
}
add_action( 'init', 'my_custom_post_type_xxx_slug_singular' );


//================================================================================================
//xxx_name_maj_singular : Permaliens
//================================================================================================
//Permalink
// add_filter( 'post_type_link', 'custom_post_type_link_xxx_slug_singular', 10, 3 );
function custom_post_type_link_xxx_slug_singular( $permalink, $post, $leavename ) {
	if ( $post->post_type == 'xxx_slug_singular' ) :
		$replace = __( 'xxx_slug_singular', 'wpst' );
		$saison = get_field( 'saison', $post->ID );
		if ( $saison && !is_object( $saison ) )
			$saison = new Saison( $saison );
		if ( !empty( $saison->slug ) )
			$replace = __( 'saison', 'wpst' ).'/'.$saison->slug;
		$permalink = str_replace( '%saison%', $replace, $permalink );
	endif;
	return $permalink;
}

//Lien d'archive
// add_filter( 'post_type_archive_link', 'custom_archive_link_xxx_slug_singular', 10, 2);
function custom_archive_link_xxx_slug_singular( $link, $post_type ) {
	if ( $post_type && $post_type == 'xxx_slug_singular' ) :
		$saison = get_saison();
		if ( $saison ) :
			$link = $saison->link;
		else :
			$template_link = link_by_template("template-xxx_slug_singulars");
			$link = $template_link ? $template_link : esc_url( home_url( '/' ) ).__('xxx_slug_plural','wpst').'/';
		endif;
	endif;

	return $link;
}


//================================================================================================
//xxx_name_maj_singular : modification du template archive
//================================================================================================
// add_filter( 'template_include', 'custom_archive_xxx_slug_singular_template', 99 );
function custom_archive_xxx_slug_singular_template( $template ) {
	if ( is_post_type_archive('xxx_slug_singular') || is_tax( array('taxo_name') ) ) {
		$new_template = locate_template( array( 'template-xxx_slug_singular.php' ) );
		if ( '' != $new_template )
			return $new_template ;
	}
	return $template;
}


//================================================================================================
//xxx_name_maj_singular : variables autorisées
//================================================================================================
// add_filter( 'query_vars', 'add_query_vars_xxx_slug_singular' );
function add_query_vars_xxx_slug_singular( $vars ){
  $vars[] = "custom_var";
  return $vars;
}


//================================================================================================
//xxx_name_maj_singular : Modification de la requête
//================================================================================================
// add_action('pre_get_posts','custom_query_xxx_slug_singular');
function custom_query_xxx_slug_singular($query) {
	if ( is_admin() || !$query->is_main_query() ) return;

	if ( is_post_type_archive( 'xxx_slug_singular' ) ) :
		// $query->set( 'posts_per_page', -1 );
		// $custom_var = get_query_var('custom_var',false);
		// $query->set( 'meta_query', array(
		// 	'relation' => 'AND',
		// 	array (
		// 		'key' => 'dates_%_date',
		// 		// 'value' => $dates,
		// 		// 'compare' => 'IN',
		// 		// 'type' => 'NUMERIC'
		// 		'value' => array( $dates[0].' 00:00:00', $dates[count($dates) - 1].' 00:00:00' ),
		// 		'type' => 'DATETIME',
		// 		'compare' => 'BETWEEN'
		// 	)
		// ) );
    return;
  endif;
}

//Pouvoir faire une requete like sur les meta key
// add_filter( 'posts_where' , 'allow_wildcards_xxx_slug_singular');
function allow_wildcards_xxx_slug_singular($where) {
	$where = str_replace("meta_key = 'dates_%_date", "meta_key LIKE 'dates_%_date", $where);
  return $where;
}


//================================================================================================
//xxx_name_maj_singular : titre auto (Nom prénom)
//================================================================================================
function title_auto_xxx_slug_singular($post_id) {
	if ( empty($_POST['post_type']) || 'xxx_slug_singular' != $_POST['post_type'] ) return;
	remove_action( 'save_post', 'title_auto_xxx_slug_singular' );
	$names = array();
	$nom = get_field('nom',$post_id);
	$prenom = get_field('prenom',$post_id);
	if ( !empty($nom) ) $names[] = ucname($nom);
	if ( !empty($prenom) ) $names[] = ucname($prenom);
	if ( !empty($names) ) :
		$title = implode(' ',$names);
		wp_update_post( array( 'ID' => $post_id, 'post_title' => $title, 'post_name' => $title ) );
	endif;
	add_action( 'save_post', 'title_auto_xxx_slug_singular' );
}
// add_action( 'save_post', 'title_auto_xxx_slug_singular' );


//================================================================================================
//xxx_name_maj_singular : Messages du custom post type
//================================================================================================
function xxx_slug_singular_updated_messages( $messages ) {
	$post             = get_post();
	$post_type        = 'xxx_slug_singular';
	if ( $post->post_type != $post_type ) return $messages;
	$post_type_object = get_post_type_object( $post_type );

	$messages[$post_type] = array(
		0  => '', // Unused. Messages start at index 1.
		1  => __( 'xxx_name_maj_singular miseeee à jour.', 'wpst' ),
		2  => __( 'Champ personnalisé mis à jour.', 'wpst' ),
		3  => __( 'Champ personnalisé supprimé.', 'wpst' ),
		4  => __( 'xxx_name_maj_singular miseeee à jour.', 'wpst' ),
		/* translators: %s: date and time of the revision */
		5  => isset( $_GET['revision'] ) ? sprintf( __( 'xxx_name_maj_singular restauréeeee à la révision du %s', 'wpst' ), wp_post_revision_title( (int) $_GET['revision'], false ) ) : false,
		6  => __( 'xxx_name_maj_singular publiéeeee.', 'wpst' ),
		7  => __( 'xxx_name_maj_singular sauvegardéeeee.', 'wpst' ),
		8  => __( 'xxx_name_maj_singular envoyéeeee.', 'wpst' ),
		9  => sprintf(
			__( 'xxx_name_maj_singular prévueeee pour le : <strong>%1$s</strong>.', 'wpst' ),
			// translators: Publish box date format, see http://php.net/date
			date_i18n( __( 'j M Y @ G:i', 'wpst' ), strtotime( $post->post_date ) )
		),
		10 => __( 'Brouillon xxx_word_duxxx_name_singular mis à jour.', 'wpst' )
	);

	if ( $post_type_object->publicly_queryable ) {
		$permalink = get_permalink( $post->ID );

		$view_link = sprintf( ' <a href="%s">%s</a>', esc_url( $permalink ), __( 'Voir xxx_word_lexxx_name_singular', 'wpst' ) );
		$messages[ $post_type ][1] .= $view_link;
		$messages[ $post_type ][6] .= $view_link;
		$messages[ $post_type ][9] .= $view_link;

		$preview_permalink = add_query_arg( 'preview', 'true', $permalink );
		$preview_link = sprintf( ' <a target="_blank" href="%s">%s</a>', esc_url( $preview_permalink ), __( 'Prévisualiser xxx_word_lexxx_name_singular', 'wpst' ) );
		$messages[ $post_type ][8]  .= $preview_link;
		$messages[ $post_type ][10] .= $preview_link;
	}

	return $messages;
}
add_filter( 'post_updated_messages', 'xxx_slug_singular_updated_messages' );


//================================================================================================
//xxx_name_maj_singular : modification des colonnes
//================================================================================================
// add_filter('manage_xxx_slug_singular_posts_columns' , 'set_xxx_slug_singular_columns', 11);
function set_xxx_slug_singular_columns($columns) {
	$new_columns = array();
	$new_columns['cb'] = $columns['cb'];
	$new_columns['image'] = __('image');
	$new_columns['title'] = $columns['title'];
	// $new_columns['categories'] = $columns['categories'];
	// $new_columns['taxonomy-auteur'] = $columns['taxonomy-auteur'];
	if ( !empty($columns['icl_translations']) ) $new_columns['icl_translations'] = $columns['icl_translations'];
	$new_columns['date'] = $columns['date'];
	return $new_columns;
}

// add_action( 'manage_xxx_slug_singular_posts_custom_column' , 'custom_xxx_slug_singular_column', 10, 2 );
function custom_xxx_slug_singular_column( $column, $post_id ) {
  switch ( $column ) {
  	case 'image' :
			$postImg = get_field('xxx_slug_singular_cover',$post_id);
			if( !empty($postImg) ) echo '<img src="'.$postImg['sizes']['thumbnail'].'">';
      break;
  }
}

// add_filter( 'manage_edit-xxx_slug_singular_sortable_columns', 'custom_xxx_slug_singular_sortable_columns', 10, 1 );
function custom_xxx_slug_singular_sortable_columns( $columns ) {
  $columns['dates'] = 'dates';
  return $columns;
}

// add_action( 'pre_get_posts', 'custom_xxx_slug_singular_column_orderby' );
function custom_xxx_slug_singular_column_orderby( $query ) {
  if( ! is_admin() )
    return;
  $orderby = $query->get( 'orderby');
  if( 'date-disque' == $orderby ) {
    $query->set('meta_key','date_sortie');
    $query->set('orderby','meta_value_num');
  }
}
?>
