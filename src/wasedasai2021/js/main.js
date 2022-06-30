// グローバル変数
var h = $(window).height();
var sect_top, sect_bottom, sect_h, sect_pad_h, sect_outer_h, scr_ratio;
// 背景等初期化
resetSectProps();

// loading animation
$(window).on('load', function () {
	// スクロール位置バグ回避
    var scr_ = $(window).scrollTop();   
    resetSectProps();
  
    // 初めて来たときのみローディング画面を表示
    var referrer = document.referrer;
    if (referrer.indexOf(window.location.host) < 0) {  
      setTimeout(function () {
		$('.l-rect'+'.-r1').delay(0).queue(function(){
			$(this).addClass('open').dequeue();
		});
		$('.l-rect'+'.-r2').delay(400).queue(function(){
			$(this).addClass('open').dequeue();
		});
		$('.l-rect'+'.-r3').delay(1200).queue(function(){
			$(this).addClass('open').dequeue();
		});
		$('#loader').delay(3600).animate({
			opacity: 0
		}, 600);
	  }, 500);
    
    setTimeout(function () {
        $('#loader').css("display", "none");
        $('#index-main').delay(200).queue(function(){
            $(this).css('filter', '').dequeue();
        });
        $('.img-date').delay(400).queue(function(){
            $(this).addClass('open').dequeue();
        });
    }, 4500);
    
    //   ページ内からトップに戻ったときの表示
    } else {
        $('#loader').css("display", "none");
        setTimeout(function () {
            $('main').delay(200).queue(function(){
                $(this).css('filter', '').dequeue();
            });
            $('.img-date').delay(300).queue(function(){
                $(this).addClass('open').dequeue();
            });
        }, 50);
    }
});

$(function() {
    //windowの高さ(px) 1vh = h/100(px);
    var vh = h/100;
    var header_h = $('header').outerHeight();

	//モーダルウィンドウ（PC表示のみ）
	var windowWidth = window.screen.width;
	if (windowWidth > 767) {
		$('.illust-img').on('click', function(){
			if ($(this).hasClass('longwidth')) {
				$('.modal-inner').addClass('longwidth');
			}	
			$('#modal img').attr('src',$(this).attr('src'));
			$('#modal').fadeIn();
		});
	}
	$('.close-icon').on('click', function(){
		$('#modal').fadeOut();
		$('.modal-inner').removeClass('longwidth');
	});
	$(document).on('click', function(event){
		var target = $(event.target);
		if(target.hasClass('modal-wrap')) {
		target.fadeOut();
		$('.modal-inner').removeClass('longwidth');
		}
	});

	//ハンバーガーメニュー
	$('.hamburger').on('click', function () {
		$('.hamburger-wrap').fadeToggle();
		$(this).toggleClass('open');
		$('#head_menu').toggleClass('open');
	});
	$(document).on('click', function(event){
		var target = $(event.target);
		if(target.hasClass('hamburger-wrap')) {
		target.fadeOut();
		$('.hamburger').removeClass('open');
		$('#head_menu').removeClass('open');
		}
	});

	// 横並びの数に応じてboxの幅を操作
    adjustListNum();

    function adjustListNum() {
        calcListNum('#contents>.container.-sect',305);
        calcListNum('#contents-wrapper>.container',300);
        calcListNum('#cg-illust-list',300);
    }
    function calcListNum(sel,px) {
        var box_width = px;
        var cont_width = $(sel).width();

        $(sel).removeClass('-three');
        $(sel).removeClass('-two');
        if (cont_width > box_width*3) {
            $(sel).addClass('-three');
        } else if (cont_width > box_width*2) {
            $(sel).addClass('-two');
        }
    }
    
    // aboutの線
    calcLineProp();
    function calcLineProp() {
        var circle_center = [];
        $('#about').find('.sitelink').each(function() {
            circle_center.push([parseInt($(this).css('top')), parseInt($(this).css('left'))]);
        })
        $('#about').find('.lines').each(function(i) {
            j = (i!=2) ? i+1 : 0;
            res = calcWidthDeg(circle_center[j][0] - circle_center[i][0], circle_center[j][1] - circle_center[i][1]);
            $(this).css({
                top:circle_center[i][0] + 'px',
                left:circle_center[i][1] + 'px',
                width:res[0] + 'px',
                transform:`rotate(${res[1]}deg) translateY(-50%)`,
            });
        })
        function calcWidthDeg(x, y) {
            return [(x**2 + y**2)**(1/2), 90 - Math.atan2(y, x) * (180 / Math.PI)]
        }
    }

    //スクロール関連
    var mv_first_tops = {
        right : parseInt($('.mv-wrapper.-right').css('top')), 
        left : parseInt($('.mv-wrapper.-left').css('top')), 
        live : parseInt($('.live-container').css('top'))
    };
    var bool_prev = ($(window).scrollTop() < h) ? 0 : 1;

    // ヘッダーと右下のボタン
    function scrolled(bool) {
        if (bool == 1) {
            $('#toScroll').fadeIn();
            $('#backToTop').fadeOut();
            $('header').removeClass('scrolled');
        } else {
            $('#toScroll').fadeOut();
            $('#backToTop').fadeIn();
            $('header').addClass('scrolled');
        }
    }
    
    // 背景パララックス
    function calcBgHeight(scr) {
        $('main').find('section').not('#mv').each(function (i) {
            
            // 視界にあるものだけ
            var selector = '.bgChange.-s' + i
            var top = sect_top[i] + (scr + h - sect_top[i])*scr_ratio*0.8;
            $(selector).css('top', top + 'px');
            
            // ボトムのちらつき防止
            if (!(scr > sect_top[i] && sect_bottom[i] > scr + h)) {
                $(selector).css('top', top + 'px');
                $(selector).height(sect_bottom[i] - top - (sect_pad_h - (sect_bottom[i] - scr)*sect_pad_h/h));
            }
        });
    }

    // ページ内リンクへのスムーズスクロール
    // 同一ページ外から
    var urlHash = location.hash;
    if (urlHash) {
        $('body,html').stop().scrollTop(0);
        setTimeout(function(){
            var duration = 2000;
            var target = $(urlHash);
            var position = target.offset().top - header_h + sect_pad_h;
            bool_prev = (position < h) ? 0 : 1;
            scrollScreen(position);
            $("html, body").animate({scrollTop: position}, duration, "easeOutExpo");
        }, 300);
    }
    // 同一ページ内から
	$('a[href^="#"]').on('click', function(){
        var duration = 1000;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = href == "#" || href == "" ? 0 : target.offset().top - header_h + sect_pad_h;
        // 背景の計算もする
        bool_prev = (position < h) ? 0 : 1;
        scrollScreen(position);
		$("html, body").animate({scrollTop: position}, duration, "easeOutExpo");
		return false;
	});

    window.addEventListener('scroll', () => {
        //スクロールの値を取得(px)
        var scr = $(window).scrollTop();
        scrollScreen(scr);
    }, { passive: true });

    function scrollScreen(scr) {
        // 下へ/上に戻るボタン、ヘッダー関連
        if (scr < h && bool_prev == 0) {
            scrolled(1);
            bool_prev = 1;
        } else if (scr >= h && bool_prev == 1) {
            scrolled(0);
            bool_prev = 0;
        }
            
        // mvパララックス
        if (windowWidth > 767) {
            $('.mv-wrapper.-right').css('top', mv_first_tops.right + scr/4 + 'px');
            $('.bg-wrapper').css('top', 'auto');
            $('.live-container').css('top', mv_first_tops.live - scr/10 + 'px');
            $('.img-title').css('top', -1 - scr/10 + 'px');
        }
        
        //背景パララックス
        calcBgHeight(scr);
    }

	//再読み込み時も表示
	jQuery(window).on('scroll');
    // var scr_first = $(window).scrollTop();
    // scrollScreen(scr_first);

    // windowのリサイズ時に変更するやつ(ウィンドウ幅格納変数等)
	$(window).resize(function() {
        h = $(window).height();
        vh = h/100;
        header_h = $('header').outerHeight();
        windowWidth = window.screen.width;
		$('.mv-wrapper.-right').css('top', '');
        $('.mv-wrapper.-bottom').css('top', '');
        mv_first_tops = {
            right : parseInt($('.mv-wrapper.-right').css('top')), 
            left : parseInt($('.mv-wrapper.-left').css('top')), 
            live : parseInt($('.live-container').css('top'))
        };
        $('.mv-wrapper.-right').css('top', '');
        $('.bg-wrapper').css('top', '');
        $('.live-container').css('top', '');
        $('.img-title').css('top', '');
        adjustListNum();
        calcLineProp();
        resetSectProps();
	});
});

function resetSectProps() {
    sect_top = [], sect_bottom = [], sect_h =[];
    sect_pad_h = ($('section:eq(1)').innerHeight() - $('section:eq(1)').height()) / 2;
    scr_ratio = sect_pad_h / (sect_pad_h + h);

    $('main').find('section').not('#mv').each(function (i) {
        sect_outer_h = $(this).innerHeight();
        sect_h.push($(this).height());
        var sect_top_tmp = $(this).offset().top;

        sect_top.push(sect_top_tmp);
        sect_bottom.push(sect_top_tmp + sect_outer_h);
        $('.bgChange.-s' + i).css('top', sect_top_tmp + 'px').height(sect_outer_h);
    });
}