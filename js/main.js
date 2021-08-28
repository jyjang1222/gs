$(function() {
  var search = $('.search_wrap').css('display');
  var lang = $('.lang_area').css('overflow');
  var w = $(window).width();

  $(window).resize(function() {
    w = $(window).width()
    if(w >= 1197) {
      $('.mo_gnb_bg').show()
      $('#header nav').removeClass('mo_nav_on')
      $('.depth_2').hide()
    }
    else {
      $('.mo_gnb_bg').hide()
      $('#gnb>li>a').children('span').removeClass('mo_nav_chevron_on')
    }
  }) // 창크기 변경후 스타일 리셋

  $('#header').hover(function() {
    if(w >= 1197) {
      $(this).addClass('header_on')
      $(this).find('img').attr('src', 'img/gs_logo_on.svg')
    }
  }, function() {
    if (w >= 1197 && search == "none" && lang == 'hidden') {
      $(this).find('img').attr('src', 'img/gs_logo_off.svg')
      $(this).removeClass('header_on')
    }
  }) //pc_header_hover

  $('#gnb').hover(function() {
    if(w >= 1197) {
      $('.gnb_bg').css({borderTop:'1px solid #CCC'}).stop().animate({height:'287px'}, 300)
      $('.depth_2').stop().slideDown(300)
      $('.search_wrap').hide()
      $('.search_btn').removeClass('search_btn_on')
      search = $('.search_wrap').css('display');
      $('.lang_area').removeClass('lang_area_on')
      lang = $('.lang_area').css('overflow')
    }
  }, function() {
    if(w >= 1197) {
      $('.gnb_bg').stop().css({height:0, border:'none'})
      $('.depth_2').hide()
    }
  }) //pc_gnb
  
  $('#gnb>li>a').click(function() {
    if(w < 1197) {
      $('#gnb>li>a').not(this).children('span').removeClass('mo_nav_chevron_on')
      $(this).children('span').toggleClass('mo_nav_chevron_on')
      $('.depth_2').stop().slideUp(300)
      $(this).next().stop().slideToggle(300)      
    }
  }) //mo_gnb

  $('.search_btn').click(function() {
    $(this).toggleClass('search_btn_on')
    $('.search_wrap').toggle();
    $('#header').addClass('header_on')
    search = $('.search_wrap').css('display')
    if(search != "none") {
      $('.search_wrap input[type=search]').focus()
      $('#header').find('img').attr('src', 'img/gs_logo_on.svg')
    }
    else {
      $('#header').find('img').attr('src', 'img/gs_logo_off.svg')
      $('#header').removeClass('header_on')
    }
  }) //검색

  $('.lang_area').click(function() {
    $(this).toggleClass('lang_area_on')
    $('#header').addClass('header_on')
    lang = $(this).css('overflow')
  }) //언어선택

  $('.lang_area').mouseleave(function() {
    if(lang != "hidden") {
      $(this).removeClass('lang_area_on')
      lang = $(this).css('overflow')
    }
  })

  $('.mo_gnb_btn').click(function() {
    if(search != "none") {
      $('#header').removeClass('header_on')
      $('#header').find('img').attr('src', 'img/gs_logo_off.svg')
      $('.search_wrap').hide();
      $('.search_btn').removeClass('search_btn_on')
      search = $('.search_wrap').css('display')
    }
    $('.mo_gnb_bg').show()
    $('#header nav').addClass('mo_nav_on')
    $('.mo_nav_on').stop().animate({right: 0}, 300)
    $('.mo_gnb_gsLogo').attr('src', 'img/gs_logo_on.svg')
  }) //모바일 gnb 열기
 
  $('.mo_gnb_close').click(function() {
    $('.depth_2').stop().slideUp(200)
    $('#gnb>li>a').children('span').removeClass('mo_nav_chevron_on')
    $('.mo_nav_on').stop().animate({right: '-300px'}, 300, function() {
      $('#header nav').removeClass('mo_nav_on')
      $('.mo_gnb_bg').hide()
    })
  }) //모바일 gnb 닫기

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
