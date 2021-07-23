$(document).ready(function(){
    var imgItems = $('.slider li').length;//slider
    var imgPos = 1;
    //agregando paginacion
    for(i = 1; i<=imgItems; i++){
        $('.pagination').append('<li><span class="fa fa-circle"></span></li>');
    }

    $('.slider li').hide();//ocultar slider
    $('.slider li:first').show();//mostrar el primer slider
    $('.pagination li:first').css({'color':'#CD6E2E'});

    //ejecutar funciones
    $('.pagination li').click(pagination);
    $('.right').click(nextslider);
    $('.left').click(prevslider);

    setInterval(function(){
        nextslider();

    }, 5000);

    //funciones ---------------------
    function pagination(){
        var paginationPos =$(this).index() + 1;

       $('.slider li').hide();
       $('.slider li:nth-child('+ paginationPos +')').fadeIn();

       $('.pagination li').css({'color': '#858585'});
       $(this).css({'color': '#CD6E2E'});
       imgPos = paginationPos;
    }

    function nextslider(){
        if(imgPos >= imgItems){imgPos =1;}
        else{imgPos++;}
        $('.pagination li').css({'color':'#858585'});
        $('.pagination li:nth-child('+ imgPos +')').css({'color':'#CD6E2E'});

        $('.slider li').hide();
        $('.slider li:nth-child('+ imgPos +')').fadeIn();
    }

    function prevslider(){
        if(imgPos <= 1){imgPos = imgItems;}
        else{imgPos--;}
        $('.pagination li').css({'color':'#858585'});
        $('.pagination li:nth-child('+ imgPos +')').css({'color':'#CD6E2E'});

        $('.slider li').hide();
        $('.slider li:nth-child('+ imgPos +')').fadeIn();
    }

});