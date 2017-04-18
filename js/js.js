//Navigasi Mobile
var nav = document.getElementById("navKC");
var navK = document.getElementById("navK");
function navShow() {
    nav.style.display = "block";
    window.onclick = function(event) {
        if (event.target == nav) {
            closeNav();
        }
    }
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            closeNav();
        }
    });
}
function closeNav() {
    navK.style.animation = "navKR .5s";
    nav.style.animation = "modalR .5s";
    setTimeout(function(){nav.style.display = "none";}, 450);
    setTimeout(function(){
        navK.style.animation = "navK .5s";
        nav.style.animation = "modal .5s";
    }, 500);
    closeSignIn();
}

//SignIn mobile
function signInK() {
    $("#navContainer").css({
        "transform": "translateX(220%)"
    });
    setTimeout(function() {
        $("#signInKC").css({
            "transform": "translateX(0)"
        });
        $("#navBack").css({
            "transform": "translateY(0)"
        });
    }, 500);
}
function closeSignIn() {
    $("#signInKC").css({
        "transform": "translateX(150%)"
    });
    $("#navBack").css({
        "transform": "translateY(-50px)"
    });
    setTimeout(function() {
        $("#navContainer").css({
            "transform": "translateX(0)"
        });
        tabM(0);
    }, 500);
}

//signIn tab mobile
function tabM(x) {
    var signin  = document.getElementById("signinFormM");
    var signup  = document.getElementById("signupFormM");
    if(x == 0) {
        signin.style.display = "block";
        signup.style.display = "none";
    } else {
        signin.style.display = "none";
        signup.style.display = "block";
    }
}

//SignIn popUp
var signInm = document.getElementById("signIn");
var signInc = $(".signIn");
function signIn() {
    signInm.style.display = "table";
    window.onclick = function(event) {
        if (event.target == signInm) {
            signInClose();
        }
    }
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            signInClose();
        }
    });
}
function signInClose() {
    signInm.style.animation = "modalR .5s";
    signInc.css("animation", "modalContentR .5s cubic-bezier(.45, -0.34, .54, .2)");
    setTimeout(function(){
        signInm.style.display = "none";
        signInm.style.animation = "modal .5s";
        signInc.css("animation", "modalContent .5s cubic-bezier(.17, .47, .19, 1.16)");
        tab(0);
    },450);
}

//SignIn tab change
function tab(x) {
    var tab  = document.getElementsByClassName("tab");
    var signin  = document.getElementById("signinForm");
    var signup  = document.getElementById("signupForm");
    
    for(i = 0; i < 2; i++) {
        tab[i].classList.remove("tabActive");
    }
    tab[x].classList.add("tabActive");
    if(x == 0) {
        $('.signIn').css({
            "height": "330px", "margin-top": "25vh"
        });
        signup.style.display = "none";
        setTimeout(function(){
            signin.style.display = "block";
        },200);
    } else {
        $('.signIn').css({
            "height": "520px", "margin-top": "15vh"
        });
        signin.style.display = "none";
        setTimeout(function(){
            signup.style.display = "block";
        },200);
    }
}

//search
$(".search").click(function() {
    var search = document.getElementById("search");
    search.style.display = "block";
    document.getElementById("searchInput").focus();
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            search.style.display = "none";
        }
    });
    window.onclick = function(event) {
        if (event.target == search) {
            search.style.display = "none";
        }
    }
});

//like
var alreadyClick = [];
$('.iconL').click(function() {
    $(this).removeClass('fa-heart-o');
    $(this).addClass('fa-heart');
    $(this).css({"transform": "scale(1.2)"});
    
    if(!$(this).hasClass("liked")){
        var angka = parseInt($(this).next(".like").text());
        angka+=1;
        $(this).next(".like").text(angka);
        $(this).addClass('liked');
    }else{
         var angka = parseInt($(this).next(".like").text());
        angka-=1;
        $(this).next(".like").text(angka);
        $(this).removeClass('liked');
            $(this).removeClass('fa-heart');
    $(this).addClass('fa-heart-o');
    $(this).css({"transform": "scale(1.0)"});
    }

});

// Random Like amount
var likes = document.getElementsByClassName("like");
for(var i = 0; i < likes.length; i++){
    var random = Math.floor((Math.random() * 100) + 50);
    $(likes[i]).text(random.toString());
}

//jQuary start
$(document).ready(function(){
    //Slide scroll effect
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});