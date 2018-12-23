$('.works-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots:true,
    responsive: [
        prevArrow = ".work-prev-arrow",
        nextArrow = ".work-next-arrow",
    ]

});

$('.team-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,

    dots:false,

    responsive: [

        {
            breakpoint: 1150,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
                arrows: true,
                dots: true
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                arrows: true,
                slidesToScroll: 1
            }
        },

    ]


});


var marker = "";
var map = "";
function initMap() {
    var uluru = {lat: -25.344, lng: 131.036};
    map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    marker = new google.maps.Marker({position: uluru, map: map});
}


    $(function() {
        $(window).scroll(function() {
            if($(this).scrollTop() != 0) {
                $('#arrow-up').fadeIn();
            } else {
                $('#arrow-up').fadeOut();
            }
        });
        $('#arrow-up').click(function() {
            $('body,html').animate({scrollTop:0},700);
        });
    });

(function($){
    $(function() {
        $('.menu__icon').on('click', function() {
            $(this).closest('.menu').toggleClass('menu_state_open');
        });
    });
})(jQuery);


$(document).ready(function(){
    $("#menu__links").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
