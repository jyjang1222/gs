$(function() {
  var search = $('.search_wrap').css('display');
  var lang = $('.lang_area').css('overflow');
  var w = $(window).width();

  var busiImg1 = ['gs_global', 'gs_retail', 'gs_shopping']
  var busiImg2 = ['gs_caltex', 'gs_eps', 'gs_energy', 'gs_enr']
  var busiImg3 = ['gs_construct', 'gs_sport']

  var busiTxt1 = ['GS글로벌은 사업 및 서비스의 확장을 통해 서비스 역량 강화에 주력하고 있습니다.', 'GS리테일은 첨단 물류 시스템 구축을 통해 국내 유통산업 현대화에 앞장서고 있습니다.', 'GS홈쇼핑은 다양한 판매채널을 통해 고객에게 최고의 상품을 제공하고 있습니다.']
  var busiTxt2 = ['GS칼텍스는 최고의 에너지 서비스를 제공하기 위해 에너지의 새로운 가치를 만들어 가고 있습니다.', 'GS EPS는 청정연료인 천연가스를 사용해 전기를 생산·공급하는 친환경 에너지 기업입니다.', 'GS에너지는 미래 신성장 사업기반의 토탈 에너지 솔루션을 추구합니다.', 'GS E&R은 석탄화력발전, 신재생에너지, 등을 영위하며 종합 에너지 기업으로 성장하고 있습니다.']
  var busiTxt3 = ['GS건설은 시공능력과 엔지니어링 기술을 확보한 최고 수준의 건설회사로 거듭나고 있습니다.', 'GS스포츠는 FC서울과 GS칼텍스 배구단을 통해 대한민국의 프로스포츠 발전에 앞장서고 있습니다.']

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
      $('.news_wrap .news_txt strong').nextAll().hide()
      $('#header .mo_nav_on .depth_2').css('height', 'auto')
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
      if(w < 1197) {
        $('#header').find('img').attr('src', 'img/gs_logo_off.svg')
        $('#header').removeClass('header_on')
      }
    }
  }) //검색

  $('.lang_area').click(function() {
    if(w >= 1197) {
      $(this).toggleClass('lang_area_on')
      $('#header').addClass('header_on')
      lang = $(this).css('overflow')
    }
  }) //언어선택

  $('.lang_area').mouseleave(function() {
    if(lang != "hidden") {
      $(this).removeClass('lang_area_on')
      lang = $(this).css('overflow')
    }
  }) //언어선택 마우스떠남

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
  
  $('.busi_fam li').hover(function() {
    var busiImg_str = $(this).parent().siblings('.busi_img').css('background-image'); //사업이미지 문자열 가져옴
    var busiImg_strIdx1 = busiImg_str.lastIndexOf('gs_'); //gs_ 앞부분 인덱스번호 가져옴
    var busiImg_strIdx2 = busiImg_str.lastIndexOf('.jpg'); //.jpg 앞부분 인덱스번호 가져옴 
    var busiImg_sliceStr = busiImg_str.slice(busiImg_strIdx1 ,  busiImg_strIdx2); //gs_앞에서 .jpg전까지 자른 문자열 저장;
    var busiImg_res //사업이미지 문자열 수정후 저장할 변수;

    var i = $(this).index();
    var j = $(this).parents('li').index(); //business li 인덱스 번호 가져옴

    switch (j) {
      case 0 : 
        busiImg_res = busiImg_str.replace(busiImg_sliceStr, busiImg1[i]);
        $(this).parent().next('p').text(busiTxt1[i])
        break;
      case 1 :
        busiImg_res = busiImg_str.replace(busiImg_sliceStr, busiImg2[i]);
        $(this).parent().next('p').text(busiTxt2[i])
        break;
      case 2 :
        busiImg_res = busiImg_str.replace(busiImg_sliceStr, busiImg3[i]);
        $(this).parent().next('p').text(busiTxt3[i])
        break;
    } //사업부문 따로 이미지 적용
    
    $(this).parent().siblings('.busi_img').css('background-image', busiImg_res); //최종 이미지 적용

    /* 이미지 alt속성 변경을 위해 현재 이미지 속성 다시가져옴 */
    busiImg_str = $(this).parent().siblings('.busi_img').css('background-image');
    busiImg_strIdx1 = busiImg_str.lastIndexOf('gs_');
    busiImg_strIdx2 = busiImg_str.lastIndexOf('.jpg'); 
    busiImg_sliceStr = busiImg_str.slice(busiImg_strIdx1 ,  busiImg_strIdx2);

    $(this).parent().siblings('.busi_img').children('img').attr('alt', busiImg_sliceStr); 
    //////
    $(this).parents('li').children('.busi_fam').find('span').removeClass('busi_on')
    $(this).children('span').addClass('busi_on') //busi리스트바

    /* 마우스 호버시 글자 컬러 변경 */
    $('.business>li').eq(j).find('.busi_on').parent().siblings().css('color', '#000')
    
    var color = ['#f36422', '#0072bc', '#85c440']

    for(var i = 0; i <= color.length; i++) {
      $('.business>li').eq(i).find('.busi_on').parent().css('color', color[i])
    }
  }) //사업 마우스호버

  $('.news_wrap li a').hover(function() {
    if(w >= 1197) {
      $('.news_wrap li a').not(this).removeClass('news_on')
      $('.news_wrap li a').not(this).find($('.news_txt')).children().not('strong').hide()
      
      $(this).find('.news_txt').children().not('strong').stop().slideDown()
      $(this).addClass('news_on')
      $('.news_on .news_date').find('span').addClass('news_on_bar')
    }
  }) //뉴스 마우스호버

  $('.fam_site_area').click(function() {
    $('.fam_site').toggleClass('fam_site_on')
    $('.fam_icon').toggleClass('fam_icon_on')
  })
  $('.fam_site').mouseleave(function() {
    $(this).toggleClass('fam_site_on')
    $('.fam_icon').toggleClass('fam_icon_on')
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
