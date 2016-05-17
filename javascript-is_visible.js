//Check if an element is visible
function isVisible ( el ) {
	return !!( el.offsetWidth || el.offsetHeight || el.getClientRects().length );
};
