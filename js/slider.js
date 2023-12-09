$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
              breakpoint: 1242,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 848,
              settings: {
                slidesToShow: 1,
                adaptiveHeight: true,
              }
            },
        ]
    });
});