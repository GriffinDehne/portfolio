$(function(){
    //================================
    //HOMEPAGE

        //  MAIN================================
        //hover   
            $('.menuItem').mouseover(function(){
                $(this).addClass('menuFill');
                $(this).css('cursor','pointer');
            });
        
            $('.menuItem').mouseout(function(){
                $(this).removeClass('menuFill');
                $(this).css('cursor','pointer');
            });
        
        //onclick    
            $('#menuWork').click(function(){
                // window.location = '../';
            });

            $('#menuType').click(function(){
                window.location = 'code/type/type.html';
            });

            $('#menuPhotos').click(function(){
                window.location = 'code/photos/photos.html';
            });

            $('#menuAbout').click(function(){
                window.location = 'code/about/about.html';
            });

        // MOBLIE ================================
        //hover

            $('.menuItemMoblie').mouseover(function(){
                $(this).addClass('menuFill');
                $(this).css('cursor','pointer');
            });
        
            $('.menuItemMoblie').mouseout(function(){
                $(this).removeClass('menuFill');
                $(this).css('cursor','pointer');
            });

        //onclick    
            $('#menuWorkMoblie').click(function(){
                // window.location = '../';
            });

            $('#menuTypeMoblie').click(function(){
                window.location = 'code/type/type.html';
            });

            $('#menuPhotosMoblie').click(function(){
                window.location = 'code/photos/photos.html';
            });

            $('#menuAboutMoblie').click(function(){
                window.location = 'code/about/about.html';
            });

    //================================
    //SECONDARY

        //  MAIN================================
        //hover   
        $('.secItem').mouseover(function(){
            $(this).addClass('menuFill');
            $(this).css('cursor','pointer');
        });
    
        $('.secItem').mouseout(function(){
            $(this).removeClass('menuFill');
            $(this).css('cursor','pointer');
        });
    
        //onclick  
        $('#secHome').click(function(){
            window.location = '../../index.html';
        });
        
        $('#secWork').click(function(){
            // window.location = '../';
        });

        $('#secType').click(function(){
            window.location = '../type/type.html';
        });

        $('#secPhotos').click(function(){
            window.location = '../photos/photos.html';
        });

        $('#secAbout').click(function(){
            window.location = '../about/about.html';
        });

        // MOBLIE ================================
        //hover

        $('.secItemMoblie').mouseover(function(){
            $(this).addClass('menuFill');
            $(this).css('cursor','pointer');
        });
    
        $('.secItemMoblie').mouseout(function(){
            $(this).removeClass('menuFill');
            $(this).css('cursor','pointer');
        });

        //onclick    
        $('#secHomeMoblie').click(function(){
            window.location = '../../index.html';
        });

        $('#secWorkMoblie').click(function(){
            // window.location = '../';
        });

        $('#secTypeMoblie').click(function(){
            window.location = '../type/type.html';
        });

        $('#secPhotosMoblie').click(function(){
            window.location = '../photos/photos.html';
        });

        $('#secAboutMoblie').click(function(){
            window.location = '../about/about.html';
        });

        //hamburger menu
    $('.menuContainer').click(function(){
        // var x = document.getElementById("secondaryMenuMoblie");
        // if (x.style.display === "none") {
        //     x.style.display = "table";
        // } else {
        //     x.style.display = "none";
        // }

        $("#secondaryMenuMoblie").toggle()

    }); 
    });