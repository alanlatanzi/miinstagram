$(function () {
    lazyload();
    
    $('.fa-heart-button').on('click', function () {
        $(this).toggleClass('fas');
        $(this).toggleClass('far');
        var id = $(this).data('id');
        $('.float-heart-' + id).toggleClass('toggleHeart');
    });
    $('.fa-bookmark').on('click', function () {
        $(this).toggleClass('fas');
        $(this).toggleClass('far');
        var id = $(this).data('id');
        $('.saved-'+id).toggleClass('show-saved');
    });
    var doubleClicked = false;
    $('.profile-big-picture').on('click', function () {
        if (doubleClicked) {
            var id = $(this).data('id');
            $('.fa-heart-' + id).toggleClass('fas');
            $('.fa-heart-' + id).toggleClass('far');
            $('.float-heart-' + id).toggleClass('z-index-on');

            $('.float-heart-' + id+' .fa-heart').toggleClass('toggleHeart');
            setTimeout(function () {
                $('.float-heart-' + id).toggleClass('z-index-on');
            }, 1000);
        }
        doubleClicked = true;
        setTimeout(() => {
            doubleClicked = false;
        }, 300);
    });

});