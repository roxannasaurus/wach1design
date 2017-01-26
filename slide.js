/*jslint browser: true*/
/*global $, jQuery, alert*/
$(window).on('scroll', function () {
    "use strict";
    var toTop = $(this).scrollTop(), index = 0;
    
    index = Math.floor(toTop);

    if (index >= 400) {
        document.getElementById("myID").className = "sideMenu show";
    } else {
        document.getElementById("myID").className = "sideMenu hide";
    }
    
    if (index >= 500) {
        document.getElementById("myID1").className = "sideMenu show2";
    } else {
        document.getElementById("myID1").className = "sideMenu hide2";
    }
    
    if (index >= 600) {
        document.getElementById("myID2").className = "sideMenu show";
    } else {
        document.getElementById("myID2").className = "sideMenu hide";
    }
    
    if (index >= 1000) {
        document.getElementById("myID3").className = "sideMenu show";
    } else {
        document.getElementById("myID3").className = "sideMenu hide";
    }
    
    if (index >= 1500) {
        document.getElementById("myID4").className = "sideMenu show2";
    } else {
        document.getElementById("myID4").className = "sideMenu hide2";
    }
  
    if (index >= 2000) {
        document.getElementById("myID5").className = "sideMenu show";
    } else {
        document.getElementById("myID5").className = "sideMenu hide";
    }
    
    if (index >= 2200) {
        document.getElementById("myID20").className = "sideMenu show2";
    } else {
        document.getElementById("myID20").className = "sideMenu hide2";
    }
    
    if (index >= 3000) {
        document.getElementById("myID6").className = "sideMenu show";
    } else {
        document.getElementById("myID6").className = "sideMenu hide";
    }
    

    if (index >= 3500) {
        document.getElementById("myID8").className = "sideMenu show2";
    } else {
        document.getElementById("myID8").className = "sideMenu hide2";
    }
    
    if (index >= 4500) {
        document.getElementById("myID9").className = "sideMenu show";
    } else {
        document.getElementById("myID9").className = "sideMenu hide";
    }
    
    if (index >= 5000) {
        document.getElementById("myID10").className = "sideMenu show2";
    } else {
        document.getElementById("myID10").className = "sideMenu hide2";
    }
    if (index >= 5500) {
        document.getElementById("myID11").className = "sideMenu show";
    } else {
        document.getElementById("myID11").className = "sideMenu hide";
    }
    
    if (index >= 6300) {
        document.getElementById("myID12").className = "sideMenu show2";
    } else {
        document.getElementById("myID12").className = "sideMenu hide2";
    }
    
    if (index >= 7300) {
        document.getElementById("myID16").className = "sideMenu show";
    } else {
        document.getElementById("myID16").className = "sideMenu hide";
    }
    
    if (index >= 7700) {
        document.getElementById("myID17").className = "sideMenu show2";
    } else {
        document.getElementById("myID17").className = "sideMenu hide2";
    }
    
    if (index >= 8000) {
        document.getElementById("myID18").className = "sideMenu show";
    } else {
        document.getElementById("myID18").className = "sideMenu hide";
    }
    
    if (index >= 8500) {
        document.getElementById("myID19").className = "sideMenu show2";
    } else {
        document.getElementById("myID19").className = "sideMenu hide2";
    }
});

$(function () {
    "use strict";
    $('#fullscreen').css('height', $(document).outerWidth() + 'px');
    var uselessPhoto = document.getElementById("useless-scene-depth"),
        usefulPhoto = document.getElementById("useful-scene-depth"),
        prePhoto = document.getElementById("pre-wach"),
        postPhoto = document.getElementById("post-wach"),
        incoherentPhoto = document.getElementById("incoherent"),
        coherentPhoto = document.getElementById("coherent"),
        costPhoto = document.getElementById("cost-saving"),
        redPhoto = document.getElementById("red"),
        yellowPhoto = document.getElementById("yellow"),
        greenPhoto = document.getElementById("green"),
        lightPhoto = document.getElementById("light-level"),
        darkPhoto = document.getElementById("dark"),
        inadequatePhoto = document.getElementById("inadequate"),
        deficientPhoto = document.getElementById("deficient"),
        adequatePhoto = document.getElementById("adequate");
    
    $(uselessPhoto).click(function () {
        var src = $(this).css('background-image'); //get the source attribute of the clicked 
        src = src.replace(/\s?url\([\'\"]?/, '').replace(/[\'\"]?\)/, '');
        $('#fullscreen img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#fullscreen').fadeIn();
        $("body").css("overflow", "hidden");
    });
    
    $(usefulPhoto).click(function () {
        var src = $(this).css('background-image'); //get the source attribute of the clicked 
        src = src.replace(/\s?url\([\'\"]?/, '').replace(/[\'\"]?\)/, '');
        $('#fullscreen img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#fullscreen').fadeIn();
        $("body").css("overflow", "hidden");
    });
    
    $(prePhoto).click(function () {
        var src = $(this).css('background-image'); //get the source attribute of the clicked 
        src = src.replace(/\s?url\([\'\"]?/, '').replace(/[\'\"]?\)/, '');
        $('#fullscreen2 img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#fullscreen2').fadeIn();
        $("body").css("overflow", "hidden");
    });
    
    $(postPhoto).click(function () {
        var src = $(this).css('background-image'); //get the source attribute of the clicked 
        src = src.replace(/\s?url\([\'\"]?/, '').replace(/[\'\"]?\)/, '');
        $('#fullscreen2 img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#fullscreen2').fadeIn();
        $("body").css("overflow", "hidden");
    });
    
    $(incoherentPhoto).click(function () {
        var src = $(this).css('background-image'); //get the source attribute of the clicked 
        src = src.replace(/\s?url\([\'\"]?/, '').replace(/[\'\"]?\)/, '');
        $('#fullscreen3 img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#fullscreen3').fadeIn();
        $("body").css("overflow", "hidden");
    });
       
    $(coherentPhoto).click(function () {
        var src = $(this).css('background-image'); //get the source attribute of the clicked 
        src = src.replace(/\s?url\([\'\"]?/, '').replace(/[\'\"]?\)/, '');
        $('#fullscreen3 img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#fullscreen3').fadeIn();
        $("body").css("overflow", "hidden");
    });
    
    $(costPhoto).click(function () {
        var src = $(this).css('background-image'); //get the source attribute of the clicked 
        src = src.replace(/\s?url\([\'\"]?/, '').replace(/[\'\"]?\)/, '');
        $('#fullscreen4 img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#fullscreen4').fadeIn();
        $("body").css("overflow", "hidden");
    });
    
    $(redPhoto).click(function () {
        var src = $(this).css('background-image'); //get the source attribute of the clicked 
        src = src.replace(/\s?url\([\'\"]?/, '').replace(/[\'\"]?\)/, '');
        $('#fullscreen5 img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#fullscreen5').fadeIn();
        $("body").css("overflow", "hidden");
    });

    $(yellowPhoto).click(function () {
        var src = $(this).css('background-image'); //get the source attribute of the clicked 
        src = src.replace(/\s?url\([\'\"]?/, '').replace(/[\'\"]?\)/, '');
        $('#fullscreen5 img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#fullscreen5').fadeIn();
        $("body").css("overflow", "hidden");
    });
    
        
    $(greenPhoto).click(function () {
        var src = $(this).css('background-image'); //get the source attribute of the clicked 
        src = src.replace(/\s?url\([\'\"]?/, '').replace(/[\'\"]?\)/, '');
        $('#fullscreen5 img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#fullscreen5').fadeIn();
        $("body").css("overflow", "hidden");
    });
    
    
    $(lightPhoto).click(function () {
        var src = $(this).css('background-image'); //get the source attribute of the clicked 
        src = src.replace(/\s?url\([\'\"]?/, '').replace(/[\'\"]?\)/, '');
        $('#fullscreen6 img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#fullscreen6').fadeIn();
        $("body").css("overflow", "hidden");
    });
    
    $(darkPhoto).click(function () {
        var src = $(this).css('background-image'); //get the source attribute of the clicked 
        src = src.replace(/\s?url\([\'\"]?/, '').replace(/[\'\"]?\)/, '');
        $('#fullscreen7 img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#fullscreen7').fadeIn();
        $("body").css("overflow", "hidden");
    });
    
    $(inadequatePhoto).click(function () {
        var src = $(this).css('background-image'); //get the source attribute of the clicked 
        src = src.replace(/\s?url\([\'\"]?/, '').replace(/[\'\"]?\)/, '');
        $('#fullscreen7 img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#fullscreen7').fadeIn();
        $("body").css("overflow", "hidden");
    });
    
    $(deficientPhoto).click(function () {
        var src = $(this).css('background-image'); //get the source attribute of the clicked 
        src = src.replace(/\s?url\([\'\"]?/, '').replace(/[\'\"]?\)/, '');
        $('#fullscreen7 img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#fullscreen7').fadeIn();
        $("body").css("overflow", "hidden");
    });
    
    $(adequatePhoto).click(function () {
        var src = $(this).css('background-image'); //get the source attribute of the clicked 
        src = src.replace(/\s?url\([\'\"]?/, '').replace(/[\'\"]?\)/, '');
        $('#fullscreen7 img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#fullscreen7').fadeIn();
        $("body").css("overflow", "hidden");
    });
    
    $('#fullscreen').click(function () {
        $(this).fadeOut(); //this will hide the fullscreen div if you click away from the image. 
        $("body").css("overflow", "auto");
    });
    
    $('#fullscreen2').click(function () {
        $(this).fadeOut(); //this will hide the fullscreen div if you click away from the image. 
        $("body").css("overflow", "auto");
    });
    
    $('#fullscreen3').click(function () {
        $(this).fadeOut(); //this will hide the fullscreen div if you click away from the image. 
        $("body").css("overflow", "auto");
    });
    
    $('#fullscreen4').click(function () {
        $(this).fadeOut(); //this will hide the fullscreen div if you click away from the image. 
        $("body").css("overflow", "auto");
    });

    $('#fullscreen5').click(function () {
        $(this).fadeOut(); //this will hide the fullscreen div if you click away from the image. 
        $("body").css("overflow", "auto");
    });
      
    $('#fullscreen6').click(function () {
        $(this).fadeOut(); //this will hide the fullscreen div if you click away from the image. 
        $("body").css("overflow", "auto");
    });
    
    $('#fullscreen7').click(function () {
        $(this).fadeOut(); //this will hide the fullscreen div if you click away from the image. 
        $("body").css("overflow", "auto");
    });
});
