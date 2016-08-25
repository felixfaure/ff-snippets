<?php
//Our class extends the WP_List_Table class, so we need to make sure that it's there
if(!class_exists('WP_List_Table')){
  require_once( ABSPATH . 'wp-admin/includes/class-wp-list-table.php' );
}

class Custom_List_Table extends WP_List_Table {

  /**
  * Constructor, we override the parent to pass our own arguments
  * We usually focus on three parameters: singular and plural labels, as well as whether the class supports AJAX.
  */
  function __construct() {
    parent::__construct( array(
      'singular'=> 'wp_list_business_month', //Singular label
      'plural' => 'wp_list_business_months', //plural label, also this well be one of the table css class
      'ajax'   => false //We won't support Ajax for this table
    ) );
  }

  /**
  * Add extra markup in the toolbars before or after the list
  * @param string $which, helps you decide if you add the markup after (bottom) or before (top) the list
  */
  // function extra_tablenav( $which ) {
  //   if ( $which == "top" ){
  //     //The code that goes before the table is here
  //     echo"Hello, I'm before the table";
  //   }
  //   if ( $which == "bottom" ){
  //     //The code that goes after the table is there
  //     echo"Hi, I'm after the table";
  //   }
  // }

  /**
  * Define the columns that are going to be used in the table
  * @return array $columns, the array of columns to use with the table
  */
  public function get_columns() {
    return array(
      'col_business_date' => __('Mois'),
      'col_business_amount' => __('Montant total'),
      'col_business_number' => __('Nombre d’affaires')
    );
  }

  /**
  * Decide which columns to activate the sorting functionality on
  * @return array $sortable, the array of columns that can be sorted by the user
  */
  public function get_sortable_columns() {
    return $sortable = array(
      'col_business_date' => 'business_date',
      'col_business_amount' => 'business_amount',
      'col_business_number' => 'business_number'
    );
  }

  /**
  * Prepare the table with different parameters, pagination, columns and table elements
  */
  function prepare_items() {
    // Query
    $number_by_page = 20;
    $paged = !empty($_GET["paged"]) ? intval($_GET["paged"]) : 1;
    $args = array(
      'posts_per_page' => $number_by_page,
      'post_type'      => 'business_month',
      'paged'          => $paged
    );
    $table_list = new WP_Query($args);

    // Register the pagination
    $this->set_pagination_args( array(
      "total_items" => $table_list->found_posts,
      "total_pages" => $table_list->max_num_pages,
      "per_page" => $number_by_page,
    ) );

    // Register the Columns
    $columns = $this->get_columns();
    $hidden = array();
    $sortable = $this->get_sortable_columns();
    $primary = $this->get_primary_column_name();
    $this->_column_headers = array($columns, $hidden, $sortable, $primary);

    // Fetch the items
    $this->items = $table_list->posts;
  }

  function column_name($item){
    return 'Value of name column';
  }

  function column_default($item){
    return 'Default value';
  }
}
?>

<div class="wrap">
    <h2>Title</h2>
    <?php
    $wp_list_table = new Custom_List_Table();
    $wp_list_table->prepare_items();
    $wp_list_table->display();
    ?>
</div>
