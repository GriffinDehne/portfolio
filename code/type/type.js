$(function() {

    //main to secondary pages
    $('#burmaDisplay').click(function(){
        window.location = 'GF_Burma.html';
    }); 

    $('#bobbiDisplay').click(function(){
        window.location = 'GF_Bobbi.html';
    });

    $('#miscDisplay').click(function(){
        window.location = 'Miscellany.html';
    });

    //mobible
    $('#burmaMoblie').click(function(){
        window.location ="GF_Burma.html";
    });

    $('#bobbiMoblie').click(function(){
        window.location ="GF_Bobbi.html";
    });

    $('#miscMoblie').click(function(){
        window.location ="Miscellany.html";
    });

    //download links
    $('.burmaDownload').click(function(){
        window.open('https://drive.google.com/open?id=1Gx3fftUKUMyqhAVWWBph7rSBrEqZBUJs')
    });

    $('.bobbiDownload').click(function(){
        window.open('https://drive.google.com/open?id=1i-BPRFQmzQzTdh-Vrgf0om9n27s_5yLb')
    });

    $('.miscDownload').click(function(){
        window.open('https://drive.google.com/open?id=1h0NQPDm65hLSwgd9ubTkCDhmuTKZdrol')
    });
 });