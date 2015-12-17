;(function($) {

    $.preloadImages = function () {
        for (var i = 0; i < arguments.length; i++) {
            $('<img>').attr('src', arguments[i]);
        }
    };
    $.preloadImages('img/img1.png', 'img/img2.png');

})(jQuery);
