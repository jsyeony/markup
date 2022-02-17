// b_04_slide_horizontal_btn.js

(function($){
  // 기능 설명
  /*
    버튼 클릭시 .horizontal_slide 가로로 이동하게 만들기(무한)
    ---------------------------------------------------------------------------
    next 클릭 .horizontal_slide 가로 1칸 이동 ( margin-left : -100% )
    움직이고 난 후, 내부 div의 첫번째를 마지막으로 강제 이동
    동시에 .horizontal_slide 를 원위치로 이동 ( margin-left : 0 )
  */

  // 변수 =====================================================================
  var slideSet = $('.slide_set');
  var btnArea = slideSet.find('.slide_btn');
  var nextBtn = btnArea.find('.next');
  var prevBtn = btnArea.find('.prev');

  var horizontal = slideSet.find('.horizontal_slide');
  var horizonDiv = horizontal.children('div');

  var permission = true; // 출입 패스권한(승인)

  // 함수 =====================================================================
  var nextBtnFn = function(){
    horizontal.stop().animate({'marginLeft':-100+'%'}, function(){
      // divFirst.appendTo(horizontal);
      // 첫번째 div 마지막으로 강제 이동
      var divFirst = horizonDiv.eq(0);
      horizontal.append( divFirst );
      // 움직인 자리 원위치
      horizontal.css({'marginLeft':0});
      // 변수 재설정 (원점이 되지 않기 위해)
      horizonDiv = horizontal.children('div');
      // nextBtn.show();
      permission = true;
    });
  };
  var prevBtnFn = function(){
    var divLast = horizonDiv.eq(-1);
    horizontal.prepend(divLast);
    // 앞으로 이동한게 우리 눈에 보이지 않도록 한칸 이동
    horizontal.css({marginLeft:-100+'%'});
    // margin-left를 0을 주면서 맨처음이 보이도록 한칸 이동
    horizontal.stop().animate({'marginLeft':0}, function(){
      // 변수 재설정 (원점으로 돌아가지 않도록)
      horizonDiv = horizontal.children('div');
      // prevBtn.show();
      permission = true;
    });
  };
  // 기능 수행 ==================================================================

  // 이벤트 =====================================================================
  nextBtn.on('click', function(e){
    e.preventDefault();
    // nextBtn.hide();

    if(permission){
      permission = false;
      // 가로로 한칸 이동
      nextBtnFn();
    };
  }); // nextBtn.on('click')

  prevBtn.on('click', function(e){
    e.preventDefault();

    if(permission){
      // prevBtn.hide();
      permission= false;
      // 맨뒤에 div 앞으로 강제 이동
      prevBtnFn();
    };
  }); // prevBtn.on('click')



})(jQuery);