$(document).ready(function(){

     var newScr1;
     var newScr2;

    $('img').hover(function(){

        newScr1 = $(this).attr("data-alt-src");
        newScr2 = $(this).attr("src");

        $(this).attr("src", newScr1);
    },
    function(){

        $(this).attr("src", newScr2);

    });
});