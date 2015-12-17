;(function($) {
/*
https://developer.mozilla.org/fr/docs/Web/HTML/Utilisation_d%27audio_et_video_en_HTML5
https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events
http://www.w3schools.com/tags/ref_av_dom.asp
http://www.sitepoint.com/essential-audio-and-video-events-for-html5/
https://developer.mozilla.org/fr/docs/Web/HTML/formats_media_support
https://developer.mozilla.org/fr/docs/Web/HTML/Element/Video
 */

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//Variables générales
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
	var videoSupport      = Modernizr.video,
		$window           = $(window),
		isPlaying         = false,
		isPaused          = false;

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//Video
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
	var $video = $('#video');
	if($video.exists() && videoSupport) {
		var video         = $video.get(0),
			$videoTrigger = $('#video_trigger');

		// video.addEventListener('canplay', playVideo, false);
		// video.addEventListener('load', playVideo, false);
		// $window.load(function() {
		// 	setTimeout(playVideo,5000);
		// });
		video.addEventListener('play', function(){
			isPlaying = true;
			isPaused = false;
	    },false);
	    video.addEventListener('pause', function(){
			isPlaying = false;
			isPaused = true;
			if(!video.ended) /*...*/;
	    },false);
	    video.addEventListener('ended', function(){
	    	video.pause();
			isPlaying = false;
			isPaused = false;
	    },false);

	    $videoTrigger.on('click', function(event) {
	    	event.preventDefault();
	    	toggleVideo();
	    });
	    $video.on('click', function(event) {
	    	event.preventDefault();
	    	toggleVideo();
	    });
	}

	function toggleVideo() {
		if(isPlaying) video.pause(); //ou video.paused
		else video.play();
	}

})(jQuery);
