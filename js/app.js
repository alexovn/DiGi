$(function(){
    $('.top-slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:'<button type="button" class="slick-arrow slick-next"><img src="./img/intro/next-arrow.svg" alt="next"></button>',
        prevArrow:'<button type="button" class="slick-arrow slick-prev"><img src="./img/intro/prev-arrow.svg" alt="prev"></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
            }
          },
          {
            breakpoint: 640,
            settings: {
                arrows: false,
            }
          }
        ]
      });
})

$(function(){
  $('.testimonials__content').slick({
    slidesToShow: 1,
    slidesToShow: 1,
    arrows: false,
    dots: true,
  })
})
$(function() {
    let $news__content = $('.news__content').masonry({
        // options
        itemSelector: '.news__item',
        columnWidth: 270,
        fitWidth: true,
        gutter: 30,
        horizontalOrder: true
      });

      $news__content.imagesLoaded().progress(function() {
        $news__content.masonry('layout');
      });
})
