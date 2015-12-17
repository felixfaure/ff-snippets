;(function($) {

	var $maps   = $('.gogoMap'),
		onTouch = Modernizr.touch;
	gogoMapper();

	function gogoMapper () {
		if($maps.length<=0) return;

		$maps.each(function(){
			render_map( $(this) );
		});
	}

	function render_map( $el ) {
		var lat         = $el.data('lat'),
			lng     = $el.data('lng'),
			title   = $el.data("title"),
			content = $el.data("content"),
			latlng  = new google.maps.LatLng( lat, lng ),
			yrStyle = [], //Your style
			args    = {
				zoom               : 17,
				center             : latlng,
				scrollwheel        : false,
				draggable          : onTouch ? false : true,
				mapTypeId          : google.maps.MapTypeId.ROADMAP,
				// styles          : yrStyle,
				streetViewControl  : false,
				overviewMapControl : false,
				mapTypeControl     : false,
				panControl         : false,
				// scaleControl    : false,
				zoomControlOptions : {style: google.maps.ZoomControlStyle.SMALL}
			},
			map     = new google.maps.Map( $el[0], args),
			// image   = 'img/map-icon.png',
			marker  = new google.maps.Marker({
				position : latlng,
				map      : map,
				title    : title,
				// icon     : image
			}),
			contentString = '<div id="map-content">'+'<strong>'+title+'</strong><div>'+content+'</div>'+'</div>',
			infowindow = new google.maps.InfoWindow({
				content: contentString
			});
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});
		google.maps.event.addDomListener(window, 'resize', function() {
			map.setCenter(latlng);
		});
	}

})(jQuery);
