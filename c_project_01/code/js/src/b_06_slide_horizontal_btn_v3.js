// b_06_slide_horizontal_btn_v3.js

(function($){
  // 기능 설명
  /*
    다음버튼을 클릭시 .horizontal_slide 기능을 움직이도록 처리
    ---------------------------------------------------------------------------------
    수행전, .horizontal_slide 내부에 있는 요소(div)의 마지막 요소를 복제하여 앞으로 이동
    .horizontal_slide영역은 내부 기존 갯수보다 +1된 값 만큼 가로값을 늘려주기
    보이는 내용은 무조건 1번째 내용이 보이도록 처리
  */
  
  // 변수 ===========================================================================
  var part = $('.part');

  var slideSet = $('.slide_set');
  var btnArea = slideSet.find('.slide_btn');
  var nextBtn = btnArea.find('.next');
  var prevBtn = btnArea.find('.prev');
  
  var indiArea = slideSet.find('.indicator');
  var indiUl = indiArea.children('ul');
  var indiLi = indiUl.children('li');
  var indiLink = indiLi.children('a');
  var indiP = indiArea.find('p');
  var nowI = indiP.find('.now');
  var nowT = indiP.find('.total');

  var horizontal = slideSet.find('.horizontal_slide');
  var horizonDiv = horizontal.children('div');
  var originDivLen = horizonDiv.length;
  
  var permission = true;
  var i = 0;
  var timed = 1000;
  var play;
  
  // 함수 =============================================================================
  var nextBtnFn = function(){
    if(permission){
      permission = false;
      i += 1;
  
      if(i >= originDivLen){
        horizontal.css({'marginLeft':100 + '%'});
        i = 0;
      };
      horizontal.stop().animate({'marginLeft':-100 * i + '%'}, function(){
        permission = true;
      });
    };
  }; // nextBtnFn()
  var prevBtnFn = function(){
    if(permission){
      permission = false;
      i -= 1;
      horizontal.stop().animate({'marginLeft':-100 * i + '%'}, function(){
        if(i < 0){
          i = originDivLen - 1;
          horizontal.css({'marginLeft': -100 * i + '%'});
        };
        permission = true;
      });
    };
  }; // prevBtnFn()
  var indicatorFn = function(){
    indiLi.eq(i).addClass('action');
    indiLi.eq(i).siblings().removeClass('action');
  }; // indicatorFn()
  var nowIFn = function(){
    nowI.text(i+1);
  }; // nowIFn()

  // 일정 시간 마다 동작 / 강제로 조건에 의해 해제
  var slideGoFn = function(){
    play = setInterval(function(){
      // nextBtnFn();
      // indicatorFn();
      // nowIFn();
      nextBtn.trigger('click', timed);
    }, timed*3);
  };
  
  var slideStopFn = function(){
    clearInterval(play);
  };

  // 기능 수행(수행 및 체크) ===========================================================
  var cloneDiv = horizonDiv.eq(-1).clone();
  horizontal.prepend(cloneDiv);

  var newHorizontalDiv = horizontal.children('div');
  var newDivLen = newHorizontalDiv.length;

  horizontal.css({'width': ( 100 * newDivLen ) + '%', 'left': -100 + '%' });
  newHorizontalDiv.css({'width':(100/newDivLen) + '%'});
  
  nowT.text(originDivLen);
  nowIFn();
  slideGoFn();

  // 이벤트 ===========================================================================
  nextBtn.on('click', function(e){
    e.preventDefault();
    nextBtnFn();
    indicatorFn();
    nowIFn();
  }); // nextBtn.on('click')
  
  prevBtn.on('click', function(e){
    e.preventDefault();
    prevBtnFn();
    indicatorFn();
    nowIFn();
  }); // prevBtn.on('click')
  
  indiLink.on('click', function(e){
    e.preventDefault();
    i = $(this).parent().index();
    horizontal.stop().animate({'marginLeft':-100 * i + '%'});
    indicatorFn();
    nowIFn();
  });

  part.on('mouseenter', function(){
    slideStopFn();
  });

  part.on('mouseleave', function(){
    slideGoFn();
  });

  })(jQuery);