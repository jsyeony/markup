// main_import_data.js

(function($){
  // 기능설명
  /*
    분리된 html 문서를 하나로 합쳐서 사용 할 수 있도록 처리
  */
  // 공통영역 불러오기 --------------------------------------------
  // 변수
  var body = $('body');
  var headBox = $('#headBox');
  var footBox = $('#footBox');
  var baseUrl = '../page/common/';
  var importPage = ['headBox.html', 'footBox.html'];

  // 기능 수행
  headBox.load(baseUrl + importPage[0]);
  footBox.load(baseUrl + importPage[1]);

  // main영역 내용 불러오기 --------------------------------------
  // 변수
  var slideBox = $('#slideBox');
  var newBox = $('#newBox');
  var subBox = $('#subBox');
  var bestBox = $('#bestBox');
  var galleryBox = $('#galleryBox');
  var sponsorBox = $('#sponsorBox');
  var mainUrl = "../page/main/"
  var importMain = ['slideBox.html', 'newBox.html', 'subBox.html', 'bestBox.html', 'galleryBox.html', 'sponsorBox.html'];
  var mainSelect = [slideBox, newBox, subBox, bestBox, galleryBox, sponsorBox];

  // 기능 수행
  // slideBox.load(mainUrl + importMain[0]);
  // newBox.load(mainUrl + importMain[1]);
  // subBox.load(mainUrl + importMain[2]);
  // bestBox.load(mainUrl + importMain[3]);
  // galleryBox.load(mainUrl + importMain[4]);
  // sponsorBox.load(mainUrl + importMain[5]);

  // var i=0;
  // for(; i < importMain.length; i += 1){
  //   mainSelect[i].load(mainUrl+importMain[i]);
  // };

  // 배열.forEach(function(data, index){})
  // $.each(배열, function(index, data){})
  $.each(mainSelect, function(index, selector){
    selector.load(mainUrl + importMain[index], function(){
      if(index === 0){
        body.append('<script src="../js/src/main_ad_slide.js" class="pc_slide"></script>');
      }
    });
  });


})(jQuery);