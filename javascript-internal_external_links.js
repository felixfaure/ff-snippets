//Select internal links
var internalLinks = document.querySelectorAll('a[href^="'+siteUrl+'"], a:not([href^="http://"]):not([href^="https://"]):not([href^="#"])');
var externalLinks = document.querySelectorAll('a[href^="http"]:not([href^="'+siteUrl+'"])');
