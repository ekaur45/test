var getCols = function (containerWid, elementsWid) {
    return Math.floor(containerWid / elementsWid);
}
var c = 0;
//the init gallery function gets an 
var moveToCols = function (options, cols) {
    for (i = 1; i <= cols; i++) {
        col = $(options['parent-selector'] + ' .imageContainer[data-col=' + i + ']').removeClass(options['bootstrap-class']).wrapAll('<div class="' + options['bootstrap-class'] + '  colContainer col' + i + '" />');
        console.log(col);
    }
}
var initGallery = function (options) {
    var containerWid = $(options['parent-selector'] + ' .container').width();
    var wid = $(options['parent-selector'] + ' .imageContainer').width();
    var cols = getCols(containerWid, wid);
    var images = $(options['parent-selector'] + ' .imageContainer');
    var row_number = 0;
    var rows = [];
    max_height = 0;
    count = 1;
    images.each(function () {
        // ratio = $(this).attr('data-ratio');            
        // var height = wid/ratio;
        colnum = (count % cols);
        $(this).addClass('imageNumber' + count);
        if (colnum == 0) {
            $(options['parent-selector'] + ' .imageNumber' + count).attr('data-col', cols);
            console.log(cols);
        }
        else {
            console.log(colnum);
            $(options['parent-selector'] + ' .imageNumber' + count).attr('data-col', colnum);
        }
        // $(this).children('.caption').css('padding-top' , (height/2)-25);

        count++;
    });
    moveToCols(options, cols);
}
$(document).ready(function () {
    var options = {
        'bootstrap-class': 'col-md-4 col-lg-4 col-sm-6 col-xs-12',
        'parent-selector': '.galleryContainer'
    }
    initGallery(options);

});