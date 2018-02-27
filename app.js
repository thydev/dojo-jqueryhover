$(document).ready(function(){
    $("img").hover(function(){
        $(this).fadeOut(50);
        $(this).attr('src', $(this).attr('data-src-in'));
        $(this).fadeIn(500);
    }, function() {
        $(this).fadeOut(50);
        $(this).attr('src', $(this).attr('data-src-out'));
        $(this).fadeIn(500);
    });
});