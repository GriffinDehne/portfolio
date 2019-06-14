$(function(){

//lower contact bar
    $('.contactInfo').mouseover(function(){
        $(this).addClass('contactHover')
        $(this).css('cursor','pointer');
    });

    $('.contactInfo').mouseout(function(){
        $(this).removeClass('contactHover')
        $(this).css('cursor','pointer');
    });

    $('#linkedin').click(function(){
        window.open('https://www.linkedin.com/in/griffin-dehne/');
    });
    
    $('#insta').click(function(){
        window.open('https://www.instagram.com/griff.n/');
    });

    $('#resume').click(function(){
        window.open('https://drive.google.com/file/d/1jRiGPOAsxqx1oeKQBjYpqGmB3gQynKTT/view?usp=sharing');
    });

    $('#contact').click(function(){
        window.open('https://forms.gle/VXv6zzjmT9JUPZy76');
    });

});