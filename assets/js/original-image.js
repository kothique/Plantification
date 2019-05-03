/**
 * Open original image when on click.
 */

(function(window, document) {
    // .post-full-image .kg-card-image
    $(document).on('click', '.post-full-image img, .kg-image', function () {
        window.open(this.src);
    });
})(window, document);
