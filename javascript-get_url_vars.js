// Récupère les varible de l'URL
// =================================================
// var name = $_GET('name'); //Variable particulière
// var $_GET = $_GET(); //Tableau des variables
function $_GET(param) {
	var vars = {};
	window.location.href.replace(
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;
	}
	return vars;
}
