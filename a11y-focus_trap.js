;(function($) {

$body.on( "keydown", "#fullscreen", function( event ) {
	var $this = $(this);

	// tab (ou maj + tab)
	if ( event.keyCode == 9 ) {
		// Chaine correspondant à tous les éléments focusables
		var focusableElementsString = "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]";
		// Liste de tous les éléments focusables
		var $focusableItems = $this.find(focusableElementsString).filter(':visible');
		// Nombre d'éléments focusables
		var numberOfFocusableItems = $focusableItems.length;
		// Elément qui a le focus actuellement
		var $focusedItem = $( document.activeElement );
		// Index par rapport à tous les éléments focusables
		var focusedItemIndex = $focusableItems.index($focusedItem);
		// Si juste table et que l'on est sur le dernier élément de la liste
		if ( !event.shiftKey && (focusedItemIndex == numberOfFocusableItems - 1) ){
			$focusableItems.get(0).focus();
			event.preventDefault();
		}
		// Si shif + tab et que l'on est sur le premier élément de la liste
		else if ( event.shiftKey && focusedItemIndex == 0 ){
			$focusableItems.get(numberOfFocusableItems - 1).focus();
			event.preventDefault();
		}
	}
});

})(jQuery);
