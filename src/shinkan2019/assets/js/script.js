$(
  (function () {
    var _loadtrig;
    _loadtrig = false;

    window.addEventListener('load', function () {
      setTimeout(function () {
        $('html,body').animate(
          {
            scrollTop: 0,
          },
          100
        );
        $('.l-loader').delay(500).fadeOut(1000);
        $('.l-content').delay(1500).animate(
          {
            opacity: 1,
          },
          1500
        );
        $('.title__kv').delay(1800).animate(
          {
            opacity: 1,
          },
          1500
        );
        $('.l-header').delay(2000).animate(
          {
            opacity: 1,
          },
          1000
        );
        $('.heading__share')
          .delay(3000)
          .animate(
            {
              opacity: 1,
            },
            1000,
            function () {
              _loadtrig = true;
            }
          );
      }, 500);
    });

    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      var _winH = $(window).height();
      var _winW = $(window).width();

      if (_loadtrig === true) {
        $('#about').each(function () {
          var imgPos = $(this).offset().top;
          if (scroll > imgPos - _winH + 300) {
            $('.intro-title').addClass('is__scrolled');
            setTimeout(function () {
              $('.intro-img').addClass('is__scrolled');
            }, 300);
            setTimeout(function () {
              $('.intro-desc').addClass('is__scrolled');
            }, 700);
          }
        });

        $('#works').each(function () {
          var imgPos = $(this).offset().top;
          if (scroll > imgPos - _winH + 300) {
            $('.works-title').addClass('is__scrolled');
            setTimeout(function () {
              $('.works-slide').addClass('is__scrolled');
            }, 700);
          }
        });

        $('#information').each(function () {
          var imgPos = $(this).offset().top;
          if (scroll > imgPos - _winH + 300) {
            $('.info-title').addClass('is__scrolled');
            setTimeout(function () {
              $('.info-desc').addClass('is__scrolled');
            }, 300);
            setTimeout(function () {
              $('.info-img').addClass('is__scrolled');
            }, 700);
          }
        });

        $('#schedule').each(function () {
          var imgPos = $(this).offset().top;
          if (scroll > imgPos - _winH + 300) {
            $('.sche-title').addClass('is__scrolled');
            setTimeout(function () {
              $('.sche-desc').addClass('is__scrolled');
            }, 300);
            setTimeout(function () {
              $('.sche-cal').addClass('is__scrolled');
            }, 700);
          }
        });

        $('#event').each(function () {
          var imgPos = $(this).offset().top;
          if (scroll > imgPos - _winH + 300) {
            $('.event-title').addClass('is__scrolled');
            setTimeout(function () {
              $('.event-prog').addClass('is__scrolled');
            }, 300);
            setTimeout(function () {
              $('.event-cg').addClass('is__scrolled');
            }, 700);
            setTimeout(function () {
              $('.event-midi').addClass('is__scrolled');
            }, 1000);
          }
        });

        $('#compa').each(function () {
          var imgPos = $(this).offset().top;
          if (scroll > imgPos - _winH + 300) {
            $('.compa-title').addClass('is__scrolled');
            setTimeout(function () {
              $('.compa-desc1').addClass('is__scrolled');
            }, 300);
            setTimeout(function () {
              $('.compa-desc2').addClass('is__scrolled');
            }, 700);
          }
        });

        $('#FAQ').each(function () {
          var imgPos = $(this).offset().top;
          if (scroll > imgPos - _winH + 300) {
            $('.q-title').addClass('is__scrolled');
            setTimeout(function () {
              $('.q-1').addClass('is__scrolled');
            }, 300);
            setTimeout(function () {
              $('.q-2').addClass('is__scrolled');
            }, 500);
            setTimeout(function () {
              $('.q-3').addClass('is__scrolled');
            }, 700);
            setTimeout(function () {
              $('.q-4').addClass('is__scrolled');
            }, 900);
            setTimeout(function () {
              $('.q-5').addClass('is__scrolled');
            }, 1100);
            setTimeout(function () {
              $('.q-6').addClass('is__scrolled');
            }, 1300);
          }
        });
      }
    });
  })()
);

$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 400;
    var href = $(this).attr('href');
    var target = $(href == '#' || href == '' ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate(
      {
        scrollTop: position,
      },
      speed,
      'swing'
    );
    return false;
  });
});
