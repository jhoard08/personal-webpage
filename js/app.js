// nav bar background on scroll
$(function () {
    $(document).scroll(function(){
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});


var $icon = $("#projectExplorer");
var $donateScroll = $("#projectExplorer");

$donateScroll.click(function () {
    console.log("I made it here");
    $('body,html').animate({
        scrollTop: $("#socialMedia").offset().top
    }, 750);
});

$donateScroll.mouseover(function () {
    $icon.removeClass("rotate-to-normal").addClass("rotate-down");
});

$donateScroll.mouseleave(function () {
    $icon.removeClass("rotate-down").addClass("rotate-to-normal");
});
