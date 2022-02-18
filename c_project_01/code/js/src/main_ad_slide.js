// main_ad_slide.js

(function($){
// 기능설명
// 외부 데이터 불러와서 확인
// $.ajax({url:jsondataUrl, dataType:'json', context:document.body}).done(function(data){});
// $.getJSON('jsondataURL', function(data){})

var jsonData = $.getJSON('../data/osam_site_main_slide_01.json');
jsonData.done(function(data){
  // 변수
  var slideData = data;
  var slideType = 'position_slide';
  var dataLen = slideData.length;
  var viewBox = $('#viewBox');

  // 기능구현
  var slideWrapperSet = '<div class="slide"><div class="slide_wrapper"></div></div>';
  viewBox.append(slideWrapperSet);

  var slideWrapperCode = viewBox.find('.slide_wrapper');
  slideWrapperCode.addClass(slideType);
  var slideDivSet = '<div class="view_cover"><div class="view_con_wrapper"><div class="view_content"><h3></h3><p></p><div class="link"><a href="#"><span class="blind">해당 내용</span>바로가기<i class="fas fa-arrow-right"></i></a></div></div><figure class="image"><figcaption class="blind"></figcaption><p class="blind"></p></figure></div></div>';
  
  // 함수
  var slideBtn = function(){
    var insertBtn = '<div class="slide_btn blind_area"><button type="button" class="next"><i class="far fa-chevron-right"></i><span>다음 내용 보기</span></button><button type="button" class="prev"><i class="far fa-chevron-left"></i><span>이전 내용 보기</span></button></div>';
    slideWrapperCode.prepend(insertBtn);
  };

  var slideDivSetFn = function(n){
    slideWrapperCode.append(slideDivSet);

    // 변수
    var slideN = slideData[n];
    var imgUrl = '../img/main_slide/'
    var slideDiv = slideWrapperCode.children('div').eq(n);
    var divTitle = slideDiv.find('h3');
    var divContentWrapper = slideDiv.find('.view_content');
    var divContent = divContentWrapper.find('p');
    var divLink = slideDiv.find('a');
    var divImg = slideDiv.find('.image');
    var imgCaption = divImg.find('figcaption');
    var imgContent = divImg.find('p');

    // 기능
    slideDiv.css({'backgroundImage':'url('+imgUrl+slideN.background+')'})
    slideDiv.addClass(slideN.description);
    divTitle.text(slideN.title);
    divContent.text(slideN.contents);
    divLink.attr({href:slideN.link});
    divImg.css({'backgroundImage':'url('+imgUrl+slideN.image+')'});
    imgCaption.text(slideN.description);
    imgContent.text(slideN.summary);
  };

  var actionFn = function(i){
    var viewCover = $('.view_cover');
    viewCover.eq(i).addClass('action');
  };
  
  var i = 0;
  for(; i < dataLen; i += 1){
    slideDivSetFn(i);
  }
  actionFn(0);
  slideBtn();

});
})(jQuery);