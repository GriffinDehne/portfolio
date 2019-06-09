$(function(){


    //zine click

    $('.zineClick').click(function(){
        window.location = 'zineWork.html';
    });
    
    $('zineClick').touchstart(function(){
        $(this).css('background-color', 'red');
    });

    $('zineClick').touchend(function(){
        window.location = 'zineWork.html';
    });

//sova click

    $('.sovaClick').click(function(){
        window.location = 'sovaWork.html';
    });

    $('sovaClick').touchstart(function(){
        $(this).css('background-color', 'red');
    });

    $('.sovaClick').touchend(function(){
        window.location = 'sovaWork.html';
    }); 


});