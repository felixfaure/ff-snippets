function img_load(image,fn) {
  if(image.complete){ // From cache
    fn(image);
  } else { // On load
    image.addEventListener('load', function() {
        fn(image);
    });
  }
}



var img = document.getElementById('image');
img_load(img,img_is_loaded);

function img_is_loaded(image) {
  //...
}
