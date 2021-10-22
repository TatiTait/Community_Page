// MASONRY 

var $grid = $('.grid').masonry({
    //options
    itemSelector: '.grid-item',
    columnWidth: 120,
    fitWidth: true,
    gutter: 0
  });
  // layout Masonry after each image loads
  $grid.imagesLoaded().progress(function(){
    $grid.masonry('layout');
  });
