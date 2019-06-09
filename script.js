

var images = document.querySelectorAll('img');
console.log(images);
imagesLoaded(images, function () {
    var elem = document.querySelector('.grid');
    var msnry = new Masonry(elem, {
        // options
        itemSelector: '.grid-item',
        columnWidth: 200
    });
});


// element argument can be a selector string
//   for an individual element
// var msnry = new Masonry('.grid', {
// });