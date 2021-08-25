$(function() {
  $('#header').hover(function() {
    $(this).find('img').attr('src', 'img/gs_logo_on.svg')
  }, function() {
    $(this).find('img').attr('src', 'img/gs_logo_off.svg')
  }) //header

  $('nav').hover(function() {
    $('.gnb_bg').css({borderTop:'1px solid #CCC'}).stop().animate({height:'287px'}, 300)
  }, function() {
    $('.gnb_bg').stop().css({height:0, border:'none'})
  })

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
  }) //slick
}) //ready
