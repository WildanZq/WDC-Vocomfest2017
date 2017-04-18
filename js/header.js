$(document).ready(function(){
    //Header scroll
    var down = $("#go").offset().top - 600;
    if($(window).height() <= 650) {
        down = $("#go").offset().top - 400;
    }
    $(window).scroll(function() {
        var x = 529;
        if($(window).height() <= 650) {
            x = 329;
        }
        
        if($(document).scrollTop() <= down + x) {
            $('.line1, .line2').css({
                "width": "0"
            });
        } else {
            $('.line1, .line2').css({
                "width": "40%"
            });
            
            if($(window).width() <= 425) {
                $('.line2').css({"width": "50%"});
                $('.line1').css({"width": "0"});
            } else if($(window).width() <= 700) {
                $('.line1').css({"width": "0"});
                $('.line2').css({"width": "60%"});
            } else if($(window).width() <= 768) {
                $('.line1, .line2').css({"width": "37%"});
            }
        }
    });
    $(window).scroll(function() {
        if($(document).scrollTop() <= down) {
            $('.header').css({
                "background": "none"
            });
            $('.header .logoC').css({
                "margin-top": "25vh", "height": "25vh", "max-height": "200px", "width": "70%", "max-width": "350px", "margin-left": "auto"
            });
            $('.header .desc').css({
                "opacity": "1", "transform": "scale(1)"
            });
            $('.header .navL, .header .navR').css({"margin-top": "40px"});
            $('.header .item, .navIcon, .mediaIcon, .search').css({"color": "white"});
            
            if($(window).width() <= 425) {
                $('.header .logoC').css({
                    "margin-top": "30vh"
                });
            }
        } else {
            $('.header').css({
                "background-color": "white"
            });
            $('.header .logoC').css({
                "margin-top": "25px", "height": "100px", "width": "200px"
            });
            $('.header .desc').css({
                "opacity": "0", "transform": "scale(0)"
            });
            $('.header .navL, .header .navR').css({"margin-top": "25px"});
            $('.header .item, .navIcon, .mediaIcon, .search').css({"color": "black"});
            
            if($(window).width() <= 700) {
                $('.header .logoC').css({
                    "margin-left": "15px", "margin-top": "10px", "width": "170px"
                });
            }
            if($(window).width() <= 320) {
                $('.header .logoC').css({
                    "margin-left": "5px", "margin-top": "15px", "width": "160px", "height": "80px"
                });
            }
        }
    });
});