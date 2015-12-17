//cf. https://github.com/tholman/intense-images/blob/master/intense.js
;(function($) {

var limited = 0; //permet d'atteindre plus facilement les bords
var speed = 0.05;
var center = true;
var $container = $CONTAINER;
var $target = $TARGET;
var container = $container.get(0);
var target = $target.get(0);

var mouse = { xCurr:0, yCurr:0, xDest: 0, yDest: 0 };
var looper; //animation frame id
var lastPosition, currentPosition = 0; // Current position of scrolly element
var targetW = 0;
var containerW = 0;
var overflowArea = 0;

setDimensions();
init();

function setDimensions() {
	targetW = $target.outerWidth();
	containerW = $container.outerWidth();
	overflowArea = containerW - targetW
}
function init() {
	if(center) {
		mouse.xCurr = mouse.xDest = window.innerWidth / 2;
		mouse.yCurr = mouse.yDest = window.innerHeight / 2;
	} else {
		mouse.xCurr = mouse.xDest = 0;
		mouse.yCurr = mouse.yDest = 0;
	}
}

function start() {
	loop();
}
function stop() {
	cancelAnimationFrame( looper );
}
function loop() {
	looper = requestAnimationFrame(loop);
	positionTarget();
}

function bindEvents() {
	container.addEventListener( 'mousemove', onMouseMove,   false );
	container.addEventListener( 'touchmove', onTouchMove,   false );
}
function unbindEvents() {
	container.removeEventListener( 'mousemove', onMouseMove,   false );
	container.removeEventListener( 'touchmove', onTouchMove,   false);
}
function onMouseMove( event ) {
	mouse.xDest = event.clientX - $container.offset().left - limited;
	mouse.yDest = event.clientY;
}
function onTouchMove( event ) {
	event.preventDefault(); // Needed to keep this event firing.
	mouse.xDest = event.touches[0].clientX - $container.offset().left - limited;
	mouse.yDest = event.touches[0].clientY;
}

function positionTarget() {
	mouse.xCurr += ( mouse.xDest - mouse.xCurr ) * speed;
	mouse.yCurr += ( mouse.yDest - mouse.yCurr ) * speed;
	currentPosition += ( mouse.xCurr - currentPosition );
	if( mouse.xCurr !== lastPosition ) {
		var position = parseFloat( currentPosition / (containerW - limited * 2) );
		position = overflowArea * position;
		if(position > 0) position = 0;
		else if(position < overflowArea) position = overflowArea;
		target.style[ 'webkitTransform' ] = 'translate3d(' + position + 'px, 0px, 0px)';
		target.style[ 'MozTransform' ] = 'translate3d(' + position + 'px, 0px, 0px)';
		target.style[ 'msTransform' ] = 'translate3d(' + position + 'px, 0px, 0px)';
		// TweenLite.set($target, {x:position}); //Si GSAP
		lastPosition = mouse.xCurr;
	}
}

bindEvents();
start();

})(jQuery);
