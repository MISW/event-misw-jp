var _loadtrig;
_loadtrig = false;

$(window).on('load', function () {
  setTimeout(function () {
    $('.loading-text').fadeOut(100);
    $('.loading-slide1').addClass('open');
    $('.loading-slide2').addClass('open');
    $('.loader').delay(1700).fadeOut(500);
    $('.kv-logo').delay(1600).animate(
      {
        opacity: 1,
      },
      500
    );
    $('.kv-heading').delay(1800).animate(
      {
        opacity: 1,
      },
      500
    );
    $('.kv-btn').delay(1800).animate(
      {
        opacity: 1,
      },
      300
    );
    $('.header')
      .delay(2200)
      .animate(
        {
          opacity: 1,
        },
        600,
        function () {
          _loadtrig = true;
        }
      );
  }, 500);
});

$(function () {
  $('.movie__thumbnail').on('click', function () {
    $('.modal__movie').fadeIn();
    $('.youtube iframe').attr(
      'src',
      'https://www.youtube.com/embed/JPHCfBfOVEQ'
    );
  });
  $('.close-btn').on('click', function () {
    $('.modal__movie').fadeOut();
    $('.youtube iframe').attr('src', '');
  });

  $('body').on('click', 'a[href^="#"]', function () {
    var href;
    var time = 1200;
    var offsetY = -80;
    href = $(this).attr('href');
    if (href === '#') {
      return;
    }
    $('html, body').animate(
      {
        scrollTop: $(href).offset().top + offsetY,
      },
      {
        duration: time,
        easing: 'easeOutExpo',
      }
    );
    return false;
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var _winH = $(window).height();
    var _winW = $(window).width();

    if (_loadtrig === true) {
      $('#about').each(function () {
        var imgPos = $(this).offset().top;
        if (scroll > imgPos - _winH + 300) {
          $('#section-header-about').addClass('is__scrolled');
          setTimeout(function () {
            $('#section-heading-about').addClass('is__scrolled');
          }, 300);
          setTimeout(function () {
            $('#topic-heading-about').addClass('is__scrolled');
          }, 600);
          setTimeout(function () {
            $('#heading-text-about').addClass('is__scrolled');
          }, 900);
          setTimeout(function () {
            $('#text-about').addClass('is__scrolled');
          }, 1200);
          setTimeout(function () {
            $('#movie').addClass('is__scrolled');
          }, 1500);
        }
      });

      $('#team-list').each(function () {
        var imgPos = $(this).offset().top;
        if (scroll > imgPos - _winH + 300) {
          $('#team-list-item-1').addClass('is__scrolled');
          setTimeout(function () {
            $('#team-list-item-2').addClass('is__scrolled');
          }, 200);
          setTimeout(function () {
            $('#team-list-item-3').addClass('is__scrolled');
          }, 400);
          setTimeout(function () {
            $('#link-btn-about').addClass('is__scrolled');
          }, 700);
        }
      });

      $('#info').each(function () {
        var imgPos = $(this).offset().top;
        if (scroll > imgPos - _winH + 300) {
          $('#section-header-info').addClass('is__scrolled');
          setTimeout(function () {
            $('#section-heading-info').addClass('is__scrolled');
          }, 300);
        }
      });

      $('#info-actibity').each(function () {
        var imgPos = $(this).offset().top;
        if (scroll > imgPos - _winH + 300) {
          setTimeout(function () {
            $('#topic-heading-actibity').addClass('is__scrolled');
          }, 300);
          setTimeout(function () {
            $('#heading-text-actibity').addClass('is__scrolled');
          }, 600);
          setTimeout(function () {
            $('#text-actibity').addClass('is__scrolled');
          }, 900);
          setTimeout(function () {
            $('#info-discord').addClass('is__scrolled');
          }, 1200);
        }
      });

      $('#info-time').each(function () {
        var imgPos = $(this).offset().top;
        if (scroll > imgPos - _winH + 300) {
          $('#topic-heading-time').addClass('is__scrolled');
          setTimeout(function () {
            $('#heading-text-time-1').addClass('is__scrolled');
          }, 300);
          setTimeout(function () {
            $('#time-schedule-date-1').addClass('is__scrolled');
          }, 500);
          setTimeout(function () {
            $('#time-schedule-date-2').addClass('is__scrolled');
          }, 700);
          setTimeout(function () {
            $('#heading-text-time-2').addClass('is__scrolled');
          }, 1100);
          setTimeout(function () {
            $('#time-schedule-date-3').addClass('is__scrolled');
          }, 1300);
        }
      });
      $('#info-participate').each(function () {
        var imgPos = $(this).offset().top;
        if (scroll > imgPos - _winH + 300) {
          $('#topic-heading-participate').addClass('is__scrolled');
          setTimeout(function () {
            $('#heading-text-participate-1').addClass('is__scrolled');
          }, 300);
          setTimeout(function () {
            $('#text-participate-1').addClass('is__scrolled');
          }, 500);
          setTimeout(function () {
            $('#heading-text-participate-2').addClass('is__scrolled');
          }, 800);
          setTimeout(function () {
            $('#text-participate-2').addClass('is__scrolled');
          }, 1000);
          setTimeout(function () {
            $('#link-btn-participate').addClass('is__scrolled');
          }, 1200);
          setTimeout(function () {
            $('#text-participate-3').addClass('is__scrolled');
          }, 1500);
          setTimeout(function () {
            $('#screenshot-participate-1').addClass('is__scrolled');
          }, 1700);
          setTimeout(function () {
            $('#text-participate-4').addClass('is__scrolled');
          }, 1900);
          setTimeout(function () {
            $('#screenshot-participate-2').addClass('is__scrolled');
          }, 2100);
          setTimeout(function () {
            $('#heading-text-participate-3').addClass('is__scrolled');
          }, 2400);
          setTimeout(function () {
            $('#text-participate-5').addClass('is__scrolled');
          }, 2600);
          setTimeout(function () {
            $('#screenshot-participate-3').addClass('is__scrolled');
          }, 2800);
        }
      });
      $('#info-admission').each(function () {
        var imgPos = $(this).offset().top;
        if (scroll > imgPos - _winH + 300) {
          $('#topic-heading-admission').addClass('is__scrolled');
          setTimeout(function () {
            $('#heading-text-admission-1').addClass('is__scrolled');
          }, 300);
          setTimeout(function () {
            $('#text-admission-1').addClass('is__scrolled');
          }, 500);
          setTimeout(function () {
            $('#link-btn-admission').addClass('is__scrolled');
          }, 800);
          setTimeout(function () {
            $('#text-admission-2').addClass('is__scrolled');
          }, 1000);
          setTimeout(function () {
            $('#screenshot-admission-1').addClass('is__scrolled');
          }, 1200);
          setTimeout(function () {
            $('#heading-text-admission-2').addClass('is__scrolled');
          }, 1500);
          setTimeout(function () {
            $('#text-admission-3').addClass('is__scrolled');
          }, 1700);
          setTimeout(function () {
            $('#text-admission-4').addClass('is__scrolled');
          }, 1900);
          setTimeout(function () {
            $('#heading-text-admission-3').addClass('is__scrolled');
          }, 2200);
          setTimeout(function () {
            $('#text-admission-5').addClass('is__scrolled');
          }, 2400);
        }
      });

      $('#schedule').each(function () {
        var imgPos = $(this).offset().top;
        if (scroll > imgPos - _winH + 300) {
          $('#section-header-schedule').addClass('is__scrolled');
          setTimeout(function () {
            $('#section-heading-schedule').addClass('is__scrolled');
          }, 300);
          setTimeout(function () {
            $('#topic-heading-schedule').addClass('is__scrolled');
          }, 500);
          setTimeout(function () {
            $('#event-item-1').addClass('is__scrolled');
          }, 1100);
          setTimeout(function () {
            $('#event-item-2').addClass('is__scrolled');
          }, 1300);
          setTimeout(function () {
            $('#event-item-3').addClass('is__scrolled');
          }, 1500);
          setTimeout(function () {
            $('#event-item-4').addClass('is__scrolled');
          }, 1700);
          setTimeout(function () {
            $('#event-item-5').addClass('is__scrolled');
          }, 1900);
          setTimeout(function () {
            $('#event-item-6').addClass('is__scrolled');
          }, 2100);
          setTimeout(function () {
            $('#event-item-7').addClass('is__scrolled');
          }, 2300);
          setTimeout(function () {
            $('#event-and-more').addClass('is__scrolled');
          }, 2500);
        }
      });

      $('#special').each(function () {
        var imgPos = $(this).offset().top;
        if (scroll > imgPos - _winH + 300) {
          $('#section-header-special').addClass('is__scrolled');
          setTimeout(function () {
            $('#section-heading-special').addClass('is__scrolled');
          }, 300);
          setTimeout(function () {
            $('#topic-heading-special-1').addClass('is__scrolled');
          }, 600);
          setTimeout(function () {
            $('#heading-text-special-1').addClass('is__scrolled');
          }, 900);
          setTimeout(function () {
            $('#soundcloud').addClass('is__scrolled');
          }, 1200);
          setTimeout(function () {
            $('#topic-heading-special-2').addClass('is__scrolled');
          }, 1500);
          setTimeout(function () {
            $('#image-list-special').addClass('is__scrolled');
          }, 1800);
          setTimeout(function () {
            $('#heading-text-special-2').addClass('is__scrolled');
          }, 2100);
        }
      });

      $('#garelly').each(function () {
        var imgPos = $(this).offset().top;
        if (scroll > imgPos - _winH + 300) {
          $('#section-header-garelly').addClass('is__scrolled');
          setTimeout(function () {
            $('#section-heading-garelly').addClass('is__scrolled');
          }, 300);
          setTimeout(function () {
            $('#topic-heading-garelly').addClass('is__scrolled');
          }, 600);
          setTimeout(function () {
            $('#heading-text-garelly').addClass('is__scrolled');
          }, 900);
          setTimeout(function () {
            $('#garelly-list').addClass('is__scrolled');
          }, 1200);
          setTimeout(function () {
            $('#link-btn-garelly').addClass('is__scrolled');
          }, 1500);
        }
      });
    }
  });
});
