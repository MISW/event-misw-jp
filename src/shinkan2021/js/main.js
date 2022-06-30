// $("セレクタ").メソッド("パラメータ[引数]");
// HTMLが準備できたら、中身の記述を実行する
  //ここにjQueryの処理を記述


$(window).on('load', function () {
  //これがあるとなぜかスクロール位置バグが治る(値は使わない)
  var scr_ = $(window).scrollTop();

  var referrer = document.referrer;
  var pattern = "https://event.misw.jp/shinkan2021/"
  if (referrer.indexOf(pattern) !== 0) {
    $('#loader').find('p').css("display", "block");

    setTimeout(function () {
      $('#loader').delay(500).queue(function(){
        $(this).addClass('open').dequeue();
      });
      $('#wrapper').animate({
        opacity: 1
      }, 500);
    }, 500);
    setTimeout(function () {
      $('#loader').css("display", "none");
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
      $('.mv-rect-1').delay(600).queue(function(){
        $(this).addClass('open').dequeue();
      });
      $('.mv-rect-2').delay(700).queue(function(){
        $(this).addClass('open').dequeue();
      });
      $('.mv-rect-3').delay(900).queue(function(){
        $(this).addClass('open').dequeue();
      });
    }, 3600);
  } else {
    setTimeout(function () {
      $('#wrapper').animate({
        opacity: 1
      });
      $('#loader').css("display", "none");
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
  }
});

$(function() {
  var h = $(window).height(); //windowの高さ(px) 1vh = h/100(px);

  //フェードイン
  $('#container > section').not('#mv').each(function () {
    //タイトルのアニメーション
    var windowWidth = window.innerWidth;
    function beforeSectionRevealed(_this) {
      $(_this).children('*').css('visibility', 'hidden');
      $(_this).children('*').css('opacity', '1');
    }
    function afterSectionRevealed (_this) {
      $(_this).find('.main-ttl-letters span').addClass('ttl-anime-letters');
      $(_this).find('.main-ttl-line').addClass('ttl-anime-line');
      $(_this).children('*').each(function(i) {
        ScrollReveal().reveal(this, {
          delay: 60*i,
          viewFactor: 0.1,
          duration: 250,
          origin: 'bottom',
          distance: '20px',
          reset: false,
          afterReveal: function(_this) {
            $(_this).find(".marker-animation").each(function(){
              $(this).addClass('active');
            });
            $(_this).removeAttr('style');
          },
        })
      });
      $(_this).removeAttr('style');
    }
    function afterSectionReseted (_this) {
      $(_this).find('.main-ttl-letters span').removeClass('ttl-anime-letters');
      $(_this).find('.main-ttl-line').removeClass('ttl-anime-line');
    }

    ScrollReveal().reveal(this, {
      viewFactor: 0.0,
      duration: 800,
      origin: 'bottom',
      distance: '40px',
      reset: false,
      afterReveal: afterSectionRevealed, //()をつけてはだめ
      afterReset: afterSectionReseted,
      beforeReveal: beforeSectionRevealed
    });
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
        if ($(this).attr('id') == 'about') {
          $('#wrapper').css('backgroundColor', '#D5EAFF');
        }
        if ($(this).attr('id') == 'info') {
          $('#wrapper').css('backgroundColor', '#E9E9E9');
        }
        if ($(this).attr('id') == 'schedule') {
          $('#wrapper').css('backgroundColor', '#D5EAFF');
        }
        if ($(this).attr('id') == 'works') {
          $('#wrapper').css('backgroundColor', '#E9E9E9');
        }
        if ($(this).attr('id') == 'special') {
          $('#wrapper').css('backgroundColor', '#D5EAFF');
        }
      }
    });
  });

  //再読み込み時も表示
  jQuery(window).scroll();

  //ページ内リンクへのスムーズスクロール
  $('a[href^="#"]').click(function(){
    var speed = 1000;
    var header_h = 150; //px
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - header_h;
    $("html, body").animate({scrollTop: position}, speed, "easeOutExpo");
    return false;
  });

  //モーダルウィンドウ
  $('.group').find('*').click(function(){
    if ($(this).attr('id') == 'group-prog') {
      $('#modal-prog').fadeIn();
    }
    if ($(this).attr('id') == 'group-cg') {
      $('#modal-cg').fadeIn();
    }
    if ($(this).attr('id') == 'group-midi') {
      $('#modal-midi').fadeIn();
    }
  });
  $('#works-cg').find('*').click(function(){
    if ($(this).attr('id') == 'cg-pic-1') {
      $('#modal-cg-1').fadeIn();
    }
    if ($(this).attr('id') == 'cg-pic-2-1') {
      $('#modal-cg-2-1').fadeIn();
    }
    if ($(this).attr('id') == 'cg-pic-2-2') {
      $('#modal-cg-2-2').fadeIn();
    }
    if ($(this).attr('id') == 'cg-pic-3') {
      $('#modal-cg-3').fadeIn();
    }
  });
  $('#special-cg').find('*').click(function(){
    if ($(this).attr('class') == 'special-cg-pic') {
      modalPics(Number($(this).attr('id')));
      $('#modal-special-cg').fadeIn();
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

function contentPics() {
  var picNum = document.getElementsByClassName('pointer');
  for (var i = 1; i <= picNum.length; i++) {
    switch (i) {
      case 4:
      case 9:
      document.getElementsByClassName('pointer')[i].innerHTML = '<img  id="'  + i + '" class="special-cg-pic"  src="img/新歓イラスト2021/special-cg-' + i + '.jpg" alt="新歓イラスト2021" />' ;
      break;
      default:
      document.getElementsByClassName('pointer')[i].innerHTML = '<img  id="'  + i + '" class="special-cg-pic"  src="img/新歓イラスト2021/special-cg-' + i + '.jpg" alt="新歓イラスト2021" />' ;
    }
  }
}
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
