$('.menu_btn').on('click', function(){
    $('header .bot nav').show()
    $('.lightbox').show()
});

$('.lightbox').on('click', function(){
    $('header .bot nav').hide()
    $('.lightbox').hide()
});

$('.sanpham .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})