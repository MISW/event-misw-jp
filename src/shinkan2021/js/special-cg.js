// $("セレクタ").メソッド("パラメータ[引数]");
// HTMLが準備できたら、中身の記述を実行する
  //ここにjQueryの処理を記述


$(window).on('load', function () {
  //これがあるとなぜかスクロール位置バグが治る(値は使わない)
  var scr_ = $(window).scrollTop();

  setTimeout(function () {
    $('#wrapper').animate({
      opacity: 1
    });
  }, 50);
  setTimeout(function () {
    $('#header').animate({
      opacity: 1
    }, 600);
    $('#toScroll').animate({
      opacity: 1
    }, 500);
    $('#mv-btn').delay(100).animate({
      opacity: 1
    }, 600);
    $('#mv-ttl').delay(300).animate({
      opacity: 1
    }, 500);
    $('.mv-rect-1').delay(300).queue(function(){
      $(this).addClass('open').dequeue();
    });
    $('.mv-rect-2').delay(400).queue(function(){
      $(this).addClass('open').dequeue();
    });
    $('.mv-rect-3').delay(600).queue(function(){
      $(this).addClass('open').dequeue();
    });
  }, 100);
});


$(function() {
  var h = $(window).height(); //windowの高さ(px) 1vh = h/100(px);

  //フェードイン
  $('#container > section').not('#mv').each(function () {
    //タイトルのアニメーション
    function beforeSectionRevealed(_this) {
      $(_this).children('*').css('visibility', 'hidden');
      $(_this).children('*').css('opacity', '1');
    }
    function afterSectionRevealed (_this) {
      $(_this).find('.main-ttl-letters span').addClass('ttl-anime-letters');
      $(_this).find('.main-ttl-line').addClass('ttl-anime-line');
      $(_this).children('*').each(function(i) {
      });
      $(_this).children('*').css('opacity', '1');
    }
    function afterSectionReseted (_this) {
      $(_this).find('.main-ttl-letters span').removeClass('ttl-anime-letters');
      $(_this).find('.main-ttl-line').removeClass('ttl-anime-line');
      $(_this).children('*').css('visibility', 'hidden');
      $(_this).children('*').css('opacity', '1');
    }
  });

  //スクロール関連
  $(window).scroll(function() {
    //パララックス
    var scr = $(window).scrollTop(); //スクロールの値を取得(px)
    var ttl_top = scr / (h/100) / 6;
    // var btn_top = 72 + scr / (h/100) / 5;
    var btn_top =75;
    // $('#mv-ttl').css('top', ttl_top + 'vh');
    // $('#mv-btn').css('top',  btn_top + 'vh');

    if (scr < h) {
      $('#toScroll').fadeIn();
      $('#backToTop').fadeOut();
    } else if (scr >= h) {
      $('#toScroll').fadeOut();
      $('#backToTop').fadeIn();
    }

    //背景色変化
    $('main section').each(function () {
      var secPosition = $(this).offset().top;
      if (scr > secPosition - h + 50) {
        if ($(this).attr('id') == 'mv') {
          $('#wrapper').css('backgroundColor', '#E9E9E9');
        }
        if ($(this).attr('id') == 'special-cg') {
          $('#wrapper').css('backgroundColor', '#D5EAFF');
        }
      }
    });
  });

  //再読み込み時も表示
  jQuery(window).scroll();

  //ページ内リンクへのスムーズスクロール
  $('a[href^="#"], a[href^="index.html#"]').click(function(){
    var speed = 1000;
    var header_h = 150; //px
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - header_h;
    $("html, body").animate({scrollTop: position}, speed, "easeOutExpo");
    return false;
  });

  //モーダルウィンドウ
  var windowWidth = window.screen.width;
  if (windowWidth > 767) {
    $('#special-cg').find('img').click(function(){
      if ($(this).attr('class') == 'special-cg-pic') {
        modalPics(Number($(this).parent().parent().attr('id')));
        $('#modal-special-cg').fadeIn();
      }
    });
  }
  $('#special-cg').find('a').click(function(){
    if ($(this).attr('class') == 'special-cg-making') {
      modalMakings(Number($(this).parent().parent().attr('id')));
      $('#modal-special-cg-making').fadeIn();
    }
  });
  $('.close-icon').click(function(){
    $('.modal-wrap').fadeOut();
  });
  $('.modal-more').click(function(){
    $('.modal-wrap').fadeOut();
  });
  $(document).click(function(event){
    var target = $(event.target);
    if(target.hasClass('modal-wrap')) {
      target.fadeOut();
    }
  });

  //ハンバーガーメニュー
  $('.hamburger').click(function () {
    $('.hamburger-wrap').fadeToggle();
    $(this).toggleClass('open');
    $('.header-nav').toggleClass('open');
  });
  $(document).click(function(event){
    var target = $(event.target);
    if(target.hasClass('hamburger-wrap')) {
      target.fadeOut();
      $('.hamburger').removeClass('open');
      $('.header-nav').removeClass('open');
    }
  });
});


function modalPics(n) {
  switch (n) {
    case 4:
    case 9:
      document.getElementById('img-src').innerHTML = '<img src="img/新歓イラスト2021/special-cg-'  + n + '.jpg" alt="新歓画集2021" />' ;
      break;
    default:
      document.getElementById('img-src').innerHTML = '<img src="img/新歓イラスト2021/special-cg-'  + n + '.png" alt="新歓画集2021" />' ;
  }
}
function modalMakings(n) {
  switch (n) {
    case 3:
      document.getElementById('makings-src').innerHTML = '<iframe  src="https://www.youtube.com/embed/DYRaDLsYf3k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' ;
      break;
    case 6:
      document.getElementById('makings-src').innerHTML = '<iframe  src="https://www.youtube.com/embed/5wuHUPdW88I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' ;
      break;
    case 7:
      document.getElementById('makings-src').innerHTML = '<iframe  src="https://www.youtube.com/embed/YEC1wsch8pg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' ;
      break;
    case 8:
      document.getElementById('makings-src').innerHTML = '<iframe  src="https://www.youtube.com/embed/9IgapKuj--Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' ;
      break;
    case 9:
      document.getElementById('makings-src').innerHTML = '<iframe  src="https://www.youtube.com/embed/TMQlLrBQpBA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' ;
      break;
  }
}
