;(function($) {

var ytReady   = false,
	$yt       = $main.find('[data-yt]'),
	playersYT = [];

fnYTMedias();

function fnYTMedias() {
	if(!$yt.exists()) return;

	var tag = document.createElement('script');
	tag.src = "//www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	$yt.on('click', function(event) {
		event.preventDefault();
		if(!ytReady) return;
		var $this = $(this);
		$this.closest('.media_videoWpr').fadeOut().closest('.media_cont').addClass('has-loader has-loader-small');
		playerYT = new YT.Player($this.next('.media_videoPlayer').get(0), {
			height: '390',
			width: '640',
			videoId: $this.data('yt'),
			//'autoplay': 1, 'autohide': 1, 'controls': 0, 'iv_load_policy': 3 (pas d'annotations video), 'modestbranding': 1, 'playsinline': 1, 'rel': 0, 'showinfo': 0
			playerVars: { 'autohide': 1, 'iv_load_policy': 3, 'modestbranding': 1, 'playsinline': 1, 'rel': 0, 'showinfo': 0, 'wmode': 'transparent' },
			events: {
				'onReady': onPlayerReady
			}
		});
		playersYT.push(playerYT);
	});

	function onPlayerReady(event) {
		var iframeYT = event.target.getIframe();
		$(iframeYT).prev('.media_cont').removeClass('has-loader has-loader-small');
		event.target.playVideo();
	}
}

window.onYouTubeIframeAPIReady = function() {
	ytReady = true;
}



})(jQuery);
