import $ from "jquery"



console.log("hello");
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll <= 0) {
        $(".header").removeClass("header-active");
    } else {
        $(".header").addClass("header-active");
    }    
})