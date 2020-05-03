$(document).ready(function () {
    
    $(window).scroll(function () { 
        if($("html").scrollTop() >= 40){
                        
            $("#navs .navbar-brand  img").attr("src", "./img/logo.png");
    
            $("#navs .left-nav  a i").css("color", "black");


            $("#navs .navbar").addClass("scrolled");
    
            $("#navs .navbar .scrolnav").css("top", "0px");
    
            $("#navs .navbar .nav-item .nav-link").css("color", "black");

    
        }else{
            $("#navs .navbar .scrolnav").css("top", "45px");
    
            $("#navs .navbar .scrolnav .nav-item .nav-link").css("color", "black");

            $("#navs .navbar").removeClass("scrolled");
    
            $("#navs .navbar .nav-item .nav-link").css("color", "white");

            $("#navs .navbar-brand  img").attr("src", "./img/logo-light.png");
    
            $("navs  .left-nav  a i").css("color", "white");
            
            $("#navs .left-nav  a i").css("color", "black");

            $("#navs .navbar-brand  img").attr("src", "./img/logo.png");
    
    
        }

    })
})