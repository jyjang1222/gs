$(function() {
  $('.manage_slider').slick({
    slidesToShow : 3,
    slidesToScroll : 1,
    autoplay : true,
    arrows : true,
    dots : true,
    responsive : [{
      breakpoint : 1196,
      settings : {
        slidesToShow : 2,
        arrows : false
      }
    }, {
      breakpoint : 720,
      settings : {
        slidesToShow : 1,
        arrows : false
      }
    }]
  })
})
