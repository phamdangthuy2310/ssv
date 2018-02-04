$(document).ready(function(){
    var $wW = $(window).innerWidth();

    calMarginFeature();
    $(window).resize(function(){
        calMarginFeature();
    });

    menuToggle();

});
function menuToggle(){
    $('#navMobile').on('click', function(){
       $('#navMenu').slideToggle(300);
        $(this).toggleClass('open');
    });
}
function calMarginFeature(){
    var $widthWin = $(window).innerWidth();
    var $widthContainer = $('.site__main-content').innerWidth();
    var $margin = ($widthWin - $widthContainer)/2;

    $('.feature__row').each(function(){
        $(this).css({
            'margin-left': -$margin,
            'margin-right': -$margin
        });

        var $heightContent = $(this).find('.feature__content-box').innerHeight();
        var $heightImage = $(this).find('.feature__image').innerHeight();
        var $diff = ($heightImage - $heightContent)/2;

        $(this).find('.feature__content-box').css({
            'margin-top' : $diff
        });
    });
    $('.fci').each(function(){
        $(this).find('.feature__content-box').css({
            'padding-left': $margin - 15
        })
    });
    $('.fic').each(function(){
        $(this).find('.feature__content-box').css({
            'padding-right': $margin - 15
        })
    });


}