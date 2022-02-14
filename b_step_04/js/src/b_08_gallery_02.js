// b_08_gallery_02.js

(function($){
  // 변수
  var gallery = $('.gallery_area2');
  var galContent = gallery.find('.gallery_content');
  var galImg = galContent.find('img');

  var galUl = gallery.find('.gallery_list');
  var galLi = galUl.find('li');
  var galBtn = galLi.find('button');

  // 함수
  var imgFn = function(i){
    galImg.eq(i).addClass('on');
    galImg.eq(i).siblings().removeClass('on');
  };
  var btnFn = function(i){
    galLi.eq(i).addClass('on');
    galLi.eq(i).siblings().removeClass('on');
  };

  // 이벤트
  galBtn.on('click', function(e){
    e.preventDefault();
    var i = $(this).parent().index();

    imgFn(i);
    btnFn(i);
  });
})(jQuery);