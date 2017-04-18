$(document).ready(function(){
    //Header scroll
    var rek = $(".rekC").offset().top - 70;
    komen = $(".komen").offset().top - 700;
    $(window).scroll(function() {
        komen = $(".komen").offset().top -700;
        if($(document).scrollTop() <= rek || komen <= $(document).scrollTop()) {
            $(".rekC").css({
                "position": "absolute", "top": ""
            });
        } else {
            $(".rekC").css({
                "position": "fixed", "top": "60px"
            });
        }
    });
});